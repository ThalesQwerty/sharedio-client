export type EntityAttribute = string | number | boolean | null | undefined | EntityObjectAttribute | EntityArrayAttribute;
export type EntityMethod = (...params: any[]) => void;

interface EntityObjectAttribute {
    [key: string]: EntityAttribute
}

interface EntityArrayAttribute extends Array<EntityAttribute> {};

export interface EntitySchema {
    readonly type: string;
    readonly id: string;
    readonly owned: boolean;
}
export class EntityListSchema<EntitySubtypes extends EntitySchema = EntitySchema> extends Array<EntitySubtypes> {
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
        return this.filter(entity => entity.owned);
    }

    /**
     * Lists all entities of this type that don't belong to you
     */
    get notOwned() {
        return this.filter(entity => !entity.owned);
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

    private constructor(items?: Array<EntitySubtypes>) {
        if (items) super(...items);
        else super();
    }

    static create<EntitySubtypes extends EntitySchema>(): EntityListSchema<EntitySubtypes> {
        return Object.create(EntityListSchema.prototype);
    }
}

export interface SharedIOSchema {
    [type: string]: EntitySchema[],
}

export type EntityName<Schema extends SharedIOSchema> = keyof Schema;