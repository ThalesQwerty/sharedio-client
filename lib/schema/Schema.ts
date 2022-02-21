import type { KeyValue } from '../types';

export type EntityAttribute = string | number | boolean | null | undefined | EntityObjectAttribute | EntityArrayAttribute;
export type EntityMethod = (...params: any[]) => void;

interface EntityObjectAttribute {
    [key: string]: EntityAttribute
}

interface EntityArrayAttribute extends Array<EntityAttribute> {};

export interface EntitySchema {
    readonly owned: boolean;
    readonly id: string;
    readonly type: string;
}

type NotOwned<EntityType extends EntitySchema = EntitySchema> = EntityType&{owned: false};
type Owned<EntityType extends EntitySchema = EntitySchema, PrivateAttributes extends KeyValue = {}> = EntityType&{owned: true}&PrivateAttributes;
export class EntityListSchema<Type extends EntitySchema = EntitySchema, PrivateAttributes extends KeyValue = {}> extends Array<Owned<Type, PrivateAttributes>|NotOwned<Type>> {
    /**
     * Returns the latest created entity of this type that belongs to you
     *
     * Equivalent to:
     * ```ts
     * EntityType.owned[EntityType.owned.length - 1]
     * ```
     */
     get mine() {
        const owned = this.owned;
        return owned[owned.length - 1];
    }

    /**
     * Lists all entities of this type that belong to you
     */
    get owned() {
        return this.filter(entity => entity.owned) as Owned<Type, PrivateAttributes>[];
    }

    /**
     * Lists all entities of this type that don't belong to you
     */
    get notOwned() {
        return this.filter(entity => !entity.owned) as NotOwned<Type>[];
    }

    /**
     * Gets the first entity created
     */
    get first() {
        return this[0];
    }

    /**
     * Gets the lastest entity created
     */
    get last() {
        return this[this.length - 1];
    }

    private constructor(items?: Array<Owned<Type, PrivateAttributes>|NotOwned<Type>>) {
        if (items) super(...items);
        else super();
    }

    static create<Type extends EntitySchema = EntitySchema, PrivateAttributes extends KeyValue = {}>(): EntityListSchema<Owned<Type, PrivateAttributes>|NotOwned<Type>> {
        return Object.create(EntityListSchema.prototype);
    }
}

export interface SharedIOSchema {
    [type: string]: EntitySchema[],
}

export type EntityName<Schema extends SharedIOSchema> = keyof Schema;