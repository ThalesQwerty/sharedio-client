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
    export interface Hosted<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: true;
        readonly inside: false;
    }
    export interface Owned<EntityType extends string>
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
    export interface HostedInside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: true;
        readonly inside: true;
    }
    export interface OwnedInside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: true;
        readonly hosted: false;
        readonly inside: true;
    }
    export interface OwnedHosted<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: true;
        readonly hosted: true;
        readonly inside: false;
    }
    export interface OwnedHostedInside<EntityType extends string>
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

    export interface Hosted extends Entity.Hosted<"Player"> {
        readonly name: any;
        readonly power: any;
        superPublic: any;
        readonly immutable: any;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface Owned extends Entity.Owned<"Player"> {
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

    export interface HostedInside
        extends Entity.HostedInside<"Player"> {
        readonly name: any;
        readonly power: any;
        superPublic: any;
        readonly immutable: any;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnedInside
        extends Entity.OwnedInside<"Player"> {
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

    export interface OwnedHosted
        extends Entity.OwnedHosted<"Player"> {
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

    export interface OwnedHostedInside
        extends Entity.OwnedHostedInside<"Player"> {
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
        | Hosted
        | Owned
        | Inside
        | HostedInside
        | OwnedInside
        | OwnedHosted
        | OwnedHostedInside;
}

export namespace Test {
    export interface Default extends Entity.Default<"Test"> {
        readonly hello: any;
    }

    export interface Hosted extends Entity.Hosted<"Test"> {
        readonly hello: any;
    }

    export interface Owned extends Entity.Owned<"Test"> {
        hello: any;
    }

    export interface Inside extends Entity.Inside<"Test"> {
        readonly hello: any;
    }

    export interface HostedInside
        extends Entity.HostedInside<"Test"> {
        readonly hello: any;
    }

    export interface OwnedInside extends Entity.OwnedInside<"Test"> {
        hello: any;
    }

    export interface OwnedHosted extends Entity.OwnedHosted<"Test"> {
        hello: any;
    }

    export interface OwnedHostedInside
        extends Entity.OwnedHostedInside<"Test"> {
        hello: any;
    }

    export type Test =
        | Default
        | Hosted
        | Owned
        | Inside
        | HostedInside
        | OwnedInside
        | OwnedHosted
        | OwnedHostedInside;
}

export interface Entities extends SharedIOSchema {
    Player: EntityListSchema<Player.Player>;
    Test: EntityListSchema<Test.Test>;
}
