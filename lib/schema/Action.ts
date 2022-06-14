import type { SharedIOClient, SharedIOEntity } from ".";
import type { KeyValue, WriteInput } from "../types";

export class Action {
    private writeTimeout: NodeJS.Immediate|null = null;

    public get client() { return this._client };
    private _client: SharedIOClient;

    public get writeQueue() { return this._writeQueue };
    private _writeQueue: KeyValue<Omit<WriteInput, "id">> = {};

    constructor(client: SharedIOClient) {
        this._client = client;
    }

    /**
     * Writes new values into an entity's attributes
     */
    public write(entity: SharedIOEntity, props: KeyValue) {
        this._writeQueue[entity.id] = {
            type: "write",
            data: {
                entityId: entity.id,
                properties: {
                    ...(this._writeQueue[entity.id]?.data?.properties),
                    ...props
                }
            }
        };

        if (!this.writeTimeout) this.writeTimeout = setImmediate(() => {
            clearImmediate(this.writeTimeout);
            this.writeTimeout = null;

            for (const entityId in this._writeQueue) {
                const request = this._writeQueue[entityId];
                this.client.send(request);
            }

            this._writeQueue = {};
        });
    }

    /**
     * Calls a method from an entity
     */
    public call(entity: SharedIOEntity, methodName: string, parameters: unknown[] = []) {
        this.client.send({
            type: "call",
            data: {
                entityId: entity.id,
                methodName,
                parameters
            }
        });
    }
}