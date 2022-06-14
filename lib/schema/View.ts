import type { SharedIOClient, SharedIOSchema, SerializedEntity } from ".";
import { SharedIOEntity, EntityListSchema } from ".";
import type { KeyValue, ViewOutput } from "../types";
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
            schema[entity.type] ??= EntityListSchema.create();
            schema[entity.type].push(entity);
        }

        return schema as any as Schema;
    }

    constructor(client: SharedIOClient, onUpdate: (newView: Schema) => void) {
        this._client = client;
        this._onUpdate = onUpdate;
    }

    public update(changes: ViewOutput) {
        if (changes.data.add) _.merge(this._entityJson, changes.data.add);
        if (changes.data.remove) this._entityJson = _.omit(this._entityJson, changes.data.remove);

        const createdEntitiesIds = Object.keys(changes.data.add).filter(entityId => changes.data.add[entityId].id);
        const deletedEntitiesIds = [];

        for (const entityId in this._entityJson) {
            const serializedEntity = this._entityJson[entityId];

            if (!serializedEntity.id) {
                // delete
                deletedEntitiesIds.push(entityId);
                delete this._entityMap[entityId];
            } else if (createdEntitiesIds.indexOf(entityId) >= 0) {
                // create
                this._entityMap[entityId] = new SharedIOEntity(this.client, serializedEntity.type, entityId, serializedEntity.state ?? {}, serializedEntity.actions ?? [], serializedEntity.owned);
            } else {
                // update
                const deletedKeys = changes.data.remove.filter(key => new RegExp(`\^${entityId}.`).test(key)).map(key => key.substring(key.indexOf("state.") + 6));
                SharedIOEntity.setState(this._entityMap[entityId], {...serializedEntity.state}, deletedKeys, serializedEntity.owned);
            }
        }

        this._entityJson = _.omit(this._entityJson, deletedEntitiesIds);

        this._onUpdate(this.entities);
    }
}