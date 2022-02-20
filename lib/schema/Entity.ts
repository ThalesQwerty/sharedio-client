import type { KeyValue } from "../types";
import type { WriteRequest } from "../types/Request";
import type { View, EntityAttribute } from ".";

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
    public readonly owned: boolean;

    /**
     * The view where this entity is being rendered at.
     */
    private readonly view: View;

    /**
     * Lists the attributes and methods names for each entity type
     */
    private static _schema: KeyValue<{attributes: string[], methods: string[]}> = {};

    constructor(view:View, type: string, id: string, state: KeyValue<EntityAttribute> = {}, actions: string[]|KeyValue<string, number> = [], owned: boolean = false) {
        this.id = id;
        this.owned = owned;
        this.type = type;
        this.view = view;

        console.log("new entity", this);

        for (const attributeName in state) {
            SharedIOEntity._addAttribute(this, attributeName, state[attributeName]);
        }

        for (const methodIndex in actions) {
            const methodName = actions[methodIndex];
            SharedIOEntity._addMethod(this, methodName);
        }
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
            entity[attributeName] = attributeValue;
        }
    }

    private static _addMethod(entity: SharedIOEntity, methodName: string) {
        if (!SharedIOEntity._hasProperty(entity, methodName)) {
            SharedIOEntity._createSchema(entity);
            SharedIOEntity._schema[entity.type].methods.push(methodName);
            entity[methodName] = () => {
                console.log(`Calling method ${methodName}...`)
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
    public static setState(entity: SharedIOEntity, newState: KeyValue<EntityAttribute>): void {
        const state:KeyValue<EntityAttribute> = {};

        for (const attributeName in newState) {
            state[attributeName] = entity[attributeName];
        }
    }

    public save() {
        this.view.client.send({
            action: "write",
            entityId: this.id,
            props: {}
        });
    }
}