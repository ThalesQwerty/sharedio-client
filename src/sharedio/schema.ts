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

    export interface Owned<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: true;
        readonly hosted: boolean;
        readonly inside: boolean;
    }

    export interface NotOwned<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: false;
        readonly hosted: boolean;
        readonly inside: boolean;
    }

    export interface Hosted<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: boolean;
        readonly hosted: true;
        readonly inside: boolean;
    }

    export interface NotHosted<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: boolean;
        readonly hosted: false;
        readonly inside: boolean;
    }

    export interface Inside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: boolean;
        readonly hosted: boolean;
        readonly inside: true;
    }

    export interface NotInside<EntityType extends string>
        extends Base<EntityType> {
        readonly owned: boolean;
        readonly hosted: boolean;
        readonly inside: false;
    }
}

type Interfaces<
    Default,
    Owned,
    NotOwned,
    Hosted,
    NotHosted,
    Inside,
    NotInside,
> =
    | Default
    | (Inside & NotOwned & NotHosted)
    | (Hosted & NotOwned & NotInside)
    | (Hosted & NotOwned & Inside)
    | (Owned & NotHosted & NotInside)
    | (Owned & NotHosted & Inside)
    | (Owned & Hosted & NotInside)
    | (Owned & Hosted & Inside);

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

    export interface Inside extends Entity.Inside<"Player"> {
        readonly name: any;
        readonly power: any;
        superPublic: any;
        readonly immutable: any;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    interface NotOwned extends Entity.NotOwned<"Player"> {}
    interface NotHosted extends Entity.NotHosted<"Player"> {}
    interface NotInside extends Entity.NotInside<"Player"> {}

    export type Player = Interfaces<
        Default,
        Owned,
        NotOwned,
        Hosted,
        NotHosted,
        Inside,
        NotInside
    >;
}

export namespace Test {
    export interface Default extends Entity.Default<"Test"> {
        readonly hello: any;
    }

    export interface Owned extends Entity.Owned<"Test"> {
        hello: any;
    }

    export interface Hosted extends Entity.Hosted<"Test"> {
        readonly hello: any;
    }

    export interface Inside extends Entity.Inside<"Test"> {
        readonly hello: any;
    }

    interface NotOwned extends Entity.NotOwned<"Test"> {}
    interface NotHosted extends Entity.NotHosted<"Test"> {}
    interface NotInside extends Entity.NotInside<"Test"> {}

    export type Test = Interfaces<
        Default,
        Owned,
        NotOwned,
        Hosted,
        NotHosted,
        Inside,
        NotInside
    >;
}

export interface Entities extends SharedIOSchema {
    Player: EntityListSchema<Player.Player>;
    Test: EntityListSchema<Test.Test>;
}
