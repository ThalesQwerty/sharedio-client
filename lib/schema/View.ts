import type { SharedIOClient, SharedIOSchema, EntityListSchema, SerializedEntity } from ".";
import { SharedIOEntity } from ".";
import type { KeyValue, ViewResponse } from "../types";
import * as _ from "lodash";

export class View<Schema extends SharedIOSchema = SharedIOSchema> {

    public get client() { return this._client };
    private _client: SharedIOClient;

    private _entityJson: KeyValue<SerializedEntity> = {};
    private _entityMap: KeyValue<SharedIOEntity> = {};

    private _onUpdate: (newView: Schema) => void;

    private get entityMap() {
        return this._entityMap;
    };

    private get entityArray() {
        return Object.keys(this._entityMap).map(id => this._entityMap[id]);
    }

    public get entities() {
        const schema: KeyValue<EntityListSchema, string> = {};

        for (const entity of this.entityArray) {
            schema[entity.type] ??= {
                mine: [],
                theirs: []
            };

            if (entity.owned) schema[entity.type].mine.push(entity);
            else schema[entity.type].theirs.push(entity);
        }

        return schema as Schema;
    }


    constructor(client: SharedIOClient, onUpdate: (newView: Schema) => void) {
        this._client = client;
        this._onUpdate = onUpdate;
    }

    public update(changes: ViewResponse) {
        if (changes.add) _.merge(this._entityJson, changes.add);
        if (changes.remove) this._entityJson = _.omit(this._entityJson, changes.remove);

        const created = Object.keys(changes.add).filter(id => changes.add[id].id);
        const deleted = [];

        for (const id in this._entityJson) {
            const serailizedEntity = this._entityJson[id];

            if (!serailizedEntity.id) {
                deleted.push(id);
                delete this._entityMap[id];
            }

            if (created.indexOf(id) >= 0) {
                this._entityMap[id] = new SharedIOEntity(this, serailizedEntity.type, id, serailizedEntity.state ?? {}, serailizedEntity.actions ?? []);
            } else {
                SharedIOEntity.setState(this._entityMap[id], serailizedEntity.state);
            }
        }

        this._entityJson = _.omit(this._entityJson, deleted);

        this._onUpdate(this.entities);
    }
}