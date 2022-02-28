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

export namespace Player {
    export interface Default extends Entity.Default<"Player"> {
        readonly name: any;
        readonly power: any;
        superPublic: any;
        readonly immutable: any;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface Host extends Entity.Host<"Player"> {
        readonly name: any;
        readonly power: any;
        superPublic: any;
        readonly immutable: any;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface Owner extends Entity.Owner<"Player"> {
        name: any;
        power: any;
        superPublic: any;
        secret: any;
        readonly immutable: any;
        readonly immutableSecret: any;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
    }

    export interface Inside extends Entity.Inside<"Player"> {
        readonly name: any;
        readonly power: any;
        superPublic: any;
        readonly immutable: any;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface HostInsider
        extends Entity.HostInsider<"Player"> {
        readonly name: any;
        readonly power: any;
        superPublic: any;
        readonly immutable: any;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInsider
        extends Entity.OwnerInsider<"Player"> {
        name: any;
        power: any;
        superPublic: any;
        secret: any;
        readonly immutable: any;
        readonly immutableSecret: any;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
    }

    export interface OwnerHost extends Entity.OwnerHost<"Player"> {
        name: any;
        power: any;
        superPublic: any;
        secret: any;
        readonly immutable: any;
        readonly immutableSecret: any;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInsider
        extends Entity.OwnerHostInsider<"Player"> {
        name: any;
        power: any;
        superPublic: any;
        secret: any;
        readonly immutable: any;
        readonly immutableSecret: any;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export type Player =
        | Default
        | Host
        | Owner
        | Inside
        | HostInsider
        | OwnerInsider
        | OwnerHost
        | OwnerHostInsider;
}

export namespace Test {
    export interface Default extends Entity.Default<"Test"> {
        readonly isFirst: false;

        readonly hello: any;
        readonly index: any;
    }

    export interface Host extends Entity.Host<"Test"> {
        readonly isFirst: false;

        readonly hello: any;
        readonly index: any;
    }

    export interface Owner extends Entity.Owner<"Test"> {
        readonly isFirst: false;

        hello: any;
        readonly index: any;
    }

    export interface Inside extends Entity.Inside<"Test"> {
        readonly isFirst: false;

        readonly hello: any;
        readonly index: any;
    }

    export interface HostInsider extends Entity.HostInsider<"Test"> {
        readonly isFirst: false;

        readonly hello: any;
        readonly index: any;
    }

    export interface OwnerInsider
        extends Entity.OwnerInsider<"Test"> {
        readonly isFirst: false;

        hello: any;
        readonly index: any;
    }

    export interface OwnerHost extends Entity.OwnerHost<"Test"> {
        readonly isFirst: false;

        hello: any;
        readonly index: any;
    }

    export interface OwnerHostInsider
        extends Entity.OwnerHostInsider<"Test"> {
        readonly isFirst: false;

        hello: any;
        readonly index: any;
    }

    export interface First extends Entity.Default<"Test"> {
        readonly isFirst: true;

        readonly hello: any;
        easterEgg: any;
        readonly index: any;
    }

    export interface HostFirst extends Entity.Host<"Test"> {
        readonly isFirst: true;

        readonly hello: any;
        easterEgg: any;
        readonly index: any;
    }

    export interface OwnerFirst extends Entity.Owner<"Test"> {
        readonly isFirst: true;

        hello: any;
        easterEgg: any;
        readonly index: any;
    }

    export interface InsideFirst extends Entity.Inside<"Test"> {
        readonly isFirst: true;

        readonly hello: any;
        easterEgg: any;
        readonly index: any;
    }

    export interface HostInsiderFirst
        extends Entity.HostInsider<"Test"> {
        readonly isFirst: true;

        readonly hello: any;
        easterEgg: any;
        readonly index: any;
    }

    export interface OwnerInsiderFirst
        extends Entity.OwnerInsider<"Test"> {
        readonly isFirst: true;

        hello: any;
        easterEgg: any;
        readonly index: any;
    }

    export interface OwnerHostFirst extends Entity.OwnerHost<"Test"> {
        readonly isFirst: true;

        hello: any;
        easterEgg: any;
        readonly index: any;
    }

    export interface OwnerHostInsiderFirst
        extends Entity.OwnerHostInsider<"Test"> {
        readonly isFirst: true;

        hello: any;
        easterEgg: any;
        readonly index: any;
    }

    export type Test =
        | Default
        | Host
        | Owner
        | Inside
        | HostInsider
        | OwnerInsider
        | OwnerHost
        | OwnerHostInsider
        | First
        | HostFirst
        | OwnerFirst
        | InsideFirst
        | HostInsiderFirst
        | OwnerInsiderFirst
        | OwnerHostFirst
        | OwnerHostInsiderFirst;
}

export interface Entities extends SharedIOSchema {
    Player: EntityListSchema<Player.Player>;
    Test: EntityListSchema<Test.Test>;
}
