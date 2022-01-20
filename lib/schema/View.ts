import type { SharedIOClient } from ".";
import type { Entity, KeyValue, ViewMessage } from "../types";
import * as _ from "lodash";

export class View {

    public get client() { return this._client };
    private _client: SharedIOClient;

    public get entities() { return this._entities };
    private _entities: KeyValue<Entity> = {};

    constructor(client: SharedIOClient) {
        this._client = client;
    }

    public update(changes: ViewMessage) {
        if (changes.add) _.merge(this._entities, changes.add);
        if (changes.remove) this._entities = _.omit(this._entities, changes.remove);

        const deleted = [];

        for (const id in this._entities) {
            const entity = this._entities[id];

            if (!entity.id) deleted.push(id);
        }

        this._entities = _.omit(this._entities, deleted);

        console.log("view", this.entities);
    }
}