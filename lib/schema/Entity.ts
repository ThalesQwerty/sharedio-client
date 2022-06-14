import type { KeyValue } from "../types";
import type { EntityAttribute, SharedIOClient } from ".";
import _ from "lodash";

export interface SerializedEntity {
    type?: string,
    id?: string,
    owned?: boolean,
    state?: KeyValue<EntityAttribute>,
    actions: string[]
}

export class SharedIOEntity {
    /**
     * The type of this entity.
     */
    public readonly type: string;

    /**
     * The unique identifier associated with this entity.
     */
    public readonly id: string;

    /**
     * Does the user own this entity?
     */
    public get owned() { return this._owned };
    private _owned: boolean;

     /**
     * Does the user host this entity?
     */
      public get hosted() { return this._hosted };
      private _hosted: boolean;

    /**
     * Is the user inside this channel?
     */
    public get inside() { return this._inside };
    private _inside: boolean;

    /**
     * The view where this entity is being rendered at.
     */
    private readonly client: SharedIOClient;

    /**
     * Lists the attributes and methods names for each entity type
     */
    private static _schema: KeyValue<{attributes: string[], methods: string[]}> = {};

    constructor(client:SharedIOClient, type: string, id: string, state: KeyValue<EntityAttribute> = {}, actions: string[]|KeyValue<string, number> = [], owned: boolean = false) {
        this.id = id;
        this._owned = owned;
        this.type = type;
        this.client = client;

        console.log("new entity", this);

        for (const attributeName in state) {
            SharedIOEntity._addAttribute(this, attributeName, state[attributeName]);
        }

        for (const methodIndex in actions) {
            const methodName = actions[methodIndex];
            SharedIOEntity._addMethod(this, methodName);
        }
    }

    private static _fieldName(attributeName: string): `@${string}` {
        return `@${attributeName}`;
    }

    private static _accessorName(attributeName: `@${string}`): string {
        return attributeName.substring(1);
    }

    private static _hasProperty(entity: SharedIOEntity, propertyName: string) {
        return propertyName in entity;
    }

    private static _createSchema(entity: SharedIOEntity) {
        SharedIOEntity._schema[entity.type] ??= {attributes: [], methods: []};
    }

    private static _addAttribute(entity: SharedIOEntity, attributeName: string, attributeValue: EntityAttribute) {
        if (!SharedIOEntity._hasProperty(entity, attributeName)) {
            SharedIOEntity._createSchema(entity);
            SharedIOEntity._schema[entity.type].attributes.push(attributeName);

            const fieldName = this._fieldName(attributeName);
            const accessorName = attributeName;

            entity[fieldName] = attributeValue;

            Object.defineProperty(entity, accessorName, {
                get() {
                    return entity[fieldName];
                },
                set(newValue) {
                    console.log(`Changed ${accessorName} from "${entity[fieldName]}" to "${newValue}"`);
                    entity[fieldName] = newValue;

                    entity.client.action.write(entity, {
                        [attributeName]: newValue
                    });
                }
            })
        }
    }

    private static _addMethod(entity: SharedIOEntity, methodName: string) {
        if (!SharedIOEntity._hasProperty(entity, methodName)) {
            SharedIOEntity._createSchema(entity);
            SharedIOEntity._schema[entity.type].methods.push(methodName);
            entity[methodName] = (params?: unknown[]) => {
                console.log(`Calling method ${methodName}...`)

                entity.client.action.call(entity, methodName, params);
            }
        }
    }

    /**
     * Gets the current state of an entity
     */
    public static getState(entity: SharedIOEntity): KeyValue<EntityAttribute> {
        const state:KeyValue<EntityAttribute> = {};

        for (const attributeName in SharedIOEntity._schema[entity.type].attributes) {
            state[attributeName] = entity[attributeName];
        }

        return state;
    }

    /**
     * Sets a new state for an entity
     */
    public static setState(entity: SharedIOEntity, newState: KeyValue<EntityAttribute>, deletedAttributes?: string[], owned?: boolean): void {
        if (entity) {
        if (owned != null) entity._owned = owned;
            for (const attributeName in newState) {
                entity[this._fieldName(attributeName)] = newState[attributeName];
            }
            for (const _deletedAttributeName of deletedAttributes) {
                const deletedAttributeName = this._fieldName(_deletedAttributeName);
                function removeAttribute(object: KeyValue, path: string) {
                    const steps = path.split(".");
                    const next = steps.shift();

                    if (steps.length === 0) {
                        delete object[next];
                    } else {
                        removeAttribute(object, steps.join("."));
                    }
                }
                removeAttribute(entity, deletedAttributeName);
            }
        }
    }
}