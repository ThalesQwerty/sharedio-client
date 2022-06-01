/*
        This file has been generated automatically by SharedIO.
        Please don't edit it unless you're 100% sure of what you're doing.
    */

import type { SharedIOSchema, EntityListSchema } from "../../lib";

namespace Entity {
    interface Base<EntityType extends string> {
        readonly id: `Entity_${string}`;
        readonly type: EntityType;

        /**
         * Does the user own this entity?
         */
        readonly owned: boolean;

        /**
         * Does the user host this entity?
         */
        readonly hosted: boolean;

        /**
         * Is the user inside this channel?
         */
        readonly inside: boolean;
    }

    export interface Default<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: false;
        readonly inside: false;
    }
    export interface Host<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: true;
        readonly inside: false;
    }
    export interface Owner<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: true;
        readonly hosted: false;
        readonly inside: false;
    }
    export interface Inside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: false;
        readonly inside: true;
    }
    export interface HostInside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: true;
        readonly inside: true;
    }
    export interface OwnerInside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: true;
        readonly hosted: false;
        readonly inside: true;
    }
    export interface OwnerHost<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: true;
        readonly hosted: true;
        readonly inside: false;
    }
    export interface OwnerHostInside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: true;
        readonly hosted: true;
        readonly inside: true;
    }
}

export namespace GetSetTest {
    export interface Default extends Entity.Default<"GetSetTest"> {
        watched: any;
        readonly number: number;
        readonly string: string;
        readonly boolean: boolean;
        random: () => void;
    }

    export interface Host extends Entity.Host<"GetSetTest"> {
        watched: any;
        readonly number: number;
        readonly string: string;
        readonly boolean: boolean;
        random: () => void;
    }

    export interface Owner extends Entity.Owner<"GetSetTest"> {
        watched: any;
        number: number;
        string: string;
        boolean: boolean;
        random: () => void;
    }

    export interface Inside extends Entity.Inside<"GetSetTest"> {
        watched: any;
        readonly number: number;
        readonly string: string;
        readonly boolean: boolean;
        random: () => void;
    }

    export interface HostInside
        extends Entity.HostInside<"GetSetTest"> {
        watched: any;
        readonly number: number;
        readonly string: string;
        readonly boolean: boolean;
        random: () => void;
    }

    export interface OwnerInside
        extends Entity.OwnerInside<"GetSetTest"> {
        watched: any;
        number: number;
        string: string;
        boolean: boolean;
        random: () => void;
    }

    export interface OwnerHost
        extends Entity.OwnerHost<"GetSetTest"> {
        watched: any;
        number: number;
        string: string;
        boolean: boolean;
        random: () => void;
    }

    export interface OwnerHostInside
        extends Entity.OwnerHostInside<"GetSetTest"> {
        watched: any;
        number: number;
        string: string;
        boolean: boolean;
        random: () => void;
    }

    export type Variants =
        | Default
        | Host
        | Owner
        | Inside
        | HostInside
        | OwnerInside
        | OwnerHost
        | OwnerHostInside;
}

export interface Entities extends SharedIOSchema {
    GetSetTest: EntityListSchema<GetSetTest.Variants>;
}
