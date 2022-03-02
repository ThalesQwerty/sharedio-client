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
    export interface inside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: false;
        readonly inside: true;
    }
    export interface HostInsider<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: true;
        readonly inside: true;
    }
    export interface OwnerInsider<EntityType extends string>
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
    export interface OwnerHostInsider<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: true;
        readonly hosted: true;
        readonly inside: true;
    }
}

export namespace GetSetTest {
    export interface Default extends Entity.Default<"GetSetTest"> {
        readonly watched: any;
    }

    export interface Host extends Entity.Host<"GetSetTest"> {
        readonly watched: any;
    }

    export interface Owner extends Entity.Owner<"GetSetTest"> {
        watched: any;
    }

    export interface inside extends Entity.inside<"GetSetTest"> {
        readonly watched: any;
    }

    export interface HostInsider
        extends Entity.HostInsider<"GetSetTest"> {
        readonly watched: any;
    }

    export interface OwnerInsider
        extends Entity.OwnerInsider<"GetSetTest"> {
        watched: any;
    }

    export interface OwnerHost
        extends Entity.OwnerHost<"GetSetTest"> {
        watched: any;
    }

    export interface OwnerHostInsider
        extends Entity.OwnerHostInsider<"GetSetTest"> {
        watched: any;
    }

    export type Variants =
        | Default
        | Host
        | Owner
        | inside
        | HostInsider
        | OwnerInsider
        | OwnerHost
        | OwnerHostInsider;
}

export interface Entities extends SharedIOSchema {
    GetSetTest: EntityListSchema<GetSetTest.Variants>;
}
