import type { SharedIOClient, SharedIOEntity } from ".";
import type { KeyValue, WriteRequest } from "../types";

export class Action {
    private writeTimeout: number|null = null;

    public get client() { return this._client };
    private _client: SharedIOClient;

    public get writeQueue() { return this._writeQueue };
    private _writeQueue: KeyValue<WriteRequest> = {};

    constructor(client: SharedIOClient) {
        this._client = client;
    }

    /**
     * Writes new values into an entity's attributes
     */
    public write(entity: SharedIOEntity, props: KeyValue) {
        this._writeQueue[entity.id] = {
            action: "write",
            entityId: entity.id,
            props: {
                ...(this._writeQueue[entity.id]?.props),
                ...props
            }
        };

        if (!this.writeTimeout) this.writeTimeout = setTimeout(() => {
            clearTimeout(this.writeTimeout);
            this.writeTimeout = null;

            for (const entityId in this._writeQueue) {
                const request = this._writeQueue[entityId];
                this.client.send(request);
            }

            this._writeQueue = {};
        }, 0);
    }

    /**
     * Calls a method from an entity
     */
    public call(entity: SharedIOEntity, methodName: string, params?: KeyValue) {
        this.client.send({
            action: "call",
            entityId: entity.id,
            methodName,
            params
        });
    }
}