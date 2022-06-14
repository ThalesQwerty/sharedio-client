import type {
    SharedIOEvents,
    SharedIOEventListenerOverloads,
    SharedIOEventEmitterOverloads,
    SharedIOConfig,
    Input,
    Output,
    KeyValue,
} from "../types";
import { View, Action } from ".";
import type { SharedIOSchema } from ".";
import { HasEvents } from "../utils/HasEvents";
import { RandomHex } from "../utils";
export class SharedIOClient<
    Schema extends SharedIOSchema = SharedIOSchema,
> extends HasEvents<
    SharedIOEvents<Schema>,
    SharedIOEventListenerOverloads<Schema>,
    SharedIOEventEmitterOverloads<Schema>
> {
    public get host() {
        return this._host;
    }
    private _host: string;

    public get port() {
        return this._port;
    }
    private _port: number;

    public get secure() {
        return this._secure;
    }
    private _secure: boolean;

    public get path() {
        return this._path;
    }
    private _path: string;

    public get url() {
        return `${this.secure ? "wss" : "ws"}://${this.host}:${
            this.port
        }/${this.path}`;
    }

    public get name() {
        return this._name;
    }
    private _name: string;

    private get tokenName() {
        return this.name
            ? `@sharedio_token_${this.name}`
            : `@sharedio_token`;
    }

    /**
     * Gets the authentication token used by this client
     */
    public get token() {
        return localStorage?.getItem(this.tokenName) ?? this._token;
    }
    private set token(newToken) {
        localStorage?.setItem(this.tokenName, newToken);
        this._token = newToken;
    }
    private _token: string;

    /**
     * Gets the pure WebSocket object wrapped by the SharedIOClient.
     *
     * Only mess directly with this if you absolutely know what you're doing.
     */
    public get websocket() {
        return this._websocket;
    }
    private _websocket: WebSocket;

    /**
     * Verifies if the client is currently connected
     */
    public get online() {
        return this._online;
    }
    private _online: boolean;

    /**
     * Returns the connection round trip time in milisseconds (between 0 and 999)
     */
    public get ping() {
        return this._ping;
    }
    private _ping: number = 0;

    /**
     * Returns the connection packet loss ratio (between 0 and 1)
     */
    public get packetLoss() {
        return this._packetLoss;
    }
    private _packetLoss: number = 0;

    public get view() { return this._view };
    private _view: View<Schema>;

    public get action() { return this._action };
    private _action: Action;

    public get entities() {
        return this._view.entities;
    }

    constructor(config: SharedIOConfig) {
        super();
        this._host = config.host ?? "localhost";
        this._port = config.port ?? 3000;
        this._secure = config.secure ?? false;
        this._path = config.path ?? "/";
        this._online = false;
        this._name = config.name ?? "";
        this._view = new View<Schema>(this, (entities) => {
            this.emit("update", {view: entities});
        });
        this._action = new Action(this);
    }

    /**
     * Attempts to start the connection with the server
     */
    public open(): SharedIOClient {
        if (
            !this._websocket ||
            this._websocket.readyState !== WebSocket.OPEN
        ) {
            this._websocket?.close();

            const ws = (this._websocket = new WebSocket(this.url));

            ws.onopen = () => {
                this._online = true;

                this.emit("open");

                this.send({
                    type: "auth",
                    data: {
                        token: this.token,
                    }
                });
            };

            ws.onclose = () => {
                this._online = false;
                this.emit("close");
            };

            ws.onmessage = ({ data }) => {
                const output = JSON.parse(
                    data.toString(),
                ) as Output;

                switch (output.type) {
                    case "auth":
                        this.token = output.data.token || null;
                        break;
                    case "ping":
                        this._ping = output.data.roundTripTime;
                        this._packetLoss = output.data.packetLossRatio;
                        this.sendPong(output.data.packetId);
                        break;
                    case "view":
                        this._view.update(output);
                        break;
                }
            };
        }

        return this;
    }

    /**
     * Forcefully disconnects from the server
     */
    public close(): SharedIOClient {
        this._websocket?.close();
        return this;
    }

    /**
     * Sends a message to the server
     * @param message Message to be sent
     */
    public sendRaw(message: KeyValue | string) {
        this._websocket?.send(
            typeof message === "string"
                ? message
                : JSON.stringify(message),
        );
    }

    /**
     * Sends a message to the server
     * @param message Message to be sent
     */
    public send(input: Omit<Input, "id">) {
        this.sendRaw({
            id: RandomHex(16),
            ...input
        });
    }

    /**
     * Responds the server's "ping" with a "pong" in order to calculate the connection round trip time
     */
    private sendPong(packetId: string) {
        this.send({
            type: "pong",
            data: {
                packetId
            }
        });
    }
}
