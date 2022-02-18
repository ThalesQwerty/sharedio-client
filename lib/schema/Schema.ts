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

export interface EntityListSchema {
    mine: EntitySchema[],
    theirs: EntitySchema[]
}

export interface SharedIOSchema {
    [type: string]: EntityListSchema,
}

export type EntityName<Schema extends SharedIOSchema> = keyof Schema;