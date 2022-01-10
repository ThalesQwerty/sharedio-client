type SharedIOEvent = "open"|"close";

interface SharedIOConfig {
    /**
     * The host of the SharedIO server
     *
     * @default "localhost"
     */
    host?:string,

    /**
     * The port of the SharedIO server
     *
     * @default 3000
     */
    port?:number,

    /**
     * Whether or not the SharedIO server uses secure connection (WSS protocol)
     *
     * @default false
     */
    secure?:boolean,

    /**
     * The path in the host for connecting with the SharedIO server
     *
     * @default "/"
     */
    path?:string,

    /**
     * The name that will be used for this client when writing user tokens into local storage.
     *
     * @default ""
     */
    name?:string
}

export class SharedIOClient {
    public get host() { return this._host };
    private _host:string;

    public get port() { return this._port };
    private _port:number;

    public get secure() { return this._secure };
    private _secure:boolean;

    public get path() { return this._path };
    private _path:string;

    public get url() { return `${this.secure ? 'wss' : 'ws'}://${this.host}:${this.port}/${this.path}` };

    public get name() { return this._name };
    private _name: string;

    private get tokenName() { return this.name ? `@sharedio_token_${this.name}` : `@sharedio_token` };

    public get token() { return localStorage?.getItem(this.tokenName) ?? this._token };
    private set token(newToken) {
        localStorage?.setItem(this.tokenName, newToken);
        this._token = newToken;
    }
    private _token:string;

    public get websocket() { return this._websocket };
    private _websocket:WebSocket;

    public get online() { return this._online };
    private _online:boolean;

    private _listeners:{[name in SharedIOEvent]: (() => void)[]} = {
        open: [],
        close: []
    };

    constructor(config: SharedIOConfig) {
        this._host = config.host ?? "localhost";
        this._port = config.port ?? 3000;
        this._secure = config.secure ?? false;
        this._path = config.path ?? "/";
        this._online = false;
        this._name = config.name ?? "";
    }

    /**
     * Adds an event listener
     */
    public on(event: SharedIOEvent, callback: () => void): SharedIOClient {
        this._listeners[event].push(callback);
        return this;
    }

    /**
     * Removes all event listeners
     */
    public removeAllListeners(event?: SharedIOEvent) {
        if (event) this._listeners[event] = [];
        else for (const name in this._listeners) {
            this._listeners[name] = [];
        }
    }

    private dispatch(event: SharedIOEvent): void {
        for (const listener of this._listeners[event]) {
            listener();
        }
    }

    /**
     * Attempts to start the connection with the server
     */
    public open(): SharedIOClient {
        if (!this._websocket || this._websocket.readyState !== WebSocket.OPEN) {
            this._websocket?.close();

            const ws = this._websocket = new WebSocket(this.url);

            ws.onopen = () => {
                this._online = true;

                this.dispatch("open");

                ws.send(JSON.stringify({
                    action: "auth",
                    token: this.token
                }));
            }

            ws.onclose = () => {
                this._online = false;
                this.dispatch("close");
            }

            ws.onmessage = ({ data }) => {
                this.token = JSON.parse(data.toString()).token || null;
            }
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
}