import type { SharedIOClient, SharedIOSchema, SerializedEntity } from ".";
import { SharedIOEntity, EntityListSchema } from ".";
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
            schema[entity.type] ??= EntityListSchema.create();
            schema[entity.type].push(entity);
        }

        return schema as any as Schema;
    }

    constructor(client: SharedIOClient, onUpdate: (newView: Schema) => void) {
        this._client = client;
        this._onUpdate = onUpdate;
    }

    public update(changes: ViewResponse) {
        if (changes.add) _.merge(this._entityJson, changes.add);
        if (changes.remove) this._entityJson = _.omit(this._entityJson, changes.remove);

        const createdEntitiesIds = Object.keys(changes.add).filter(entityId => changes.add[entityId].id);
        const deletedEntitiesIds = [];

        console.log(changes, this._entityJson);

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
                SharedIOEntity.setState(this._entityMap[entityId], {...serializedEntity.state}, serializedEntity.owned);
            }
        }

        this._entityJson = _.omit(this._entityJson, deletedEntitiesIds);

        console.log(this._entityJson);

        this._onUpdate(this.entities);
    }
}