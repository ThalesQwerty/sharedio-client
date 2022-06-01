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

export namespace Player {
    export interface Default extends Entity.Default<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface Host extends Entity.Host<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface Owner extends Entity.Owner<"Player"> {
        readonly ally: false;
        readonly dead: false;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
    }

    export interface Inside extends Entity.Inside<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface HostInside extends Entity.HostInside<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInside
        extends Entity.OwnerInside<"Player"> {
        readonly ally: false;
        readonly dead: false;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
    }

    export interface OwnerHost extends Entity.OwnerHost<"Player"> {
        readonly ally: false;
        readonly dead: false;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInside
        extends Entity.OwnerHostInside<"Player"> {
        readonly ally: false;
        readonly dead: false;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export interface Ally extends Entity.Default<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface HostAlly extends Entity.Host<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerAlly extends Entity.Owner<"Player"> {
        readonly ally: true;
        readonly dead: false;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
    }

    export interface InsideAlly extends Entity.Inside<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface HostInsideAlly
        extends Entity.HostInside<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInsideAlly
        extends Entity.OwnerInside<"Player"> {
        readonly ally: true;
        readonly dead: false;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
    }

    export interface OwnerHostAlly
        extends Entity.OwnerHost<"Player"> {
        readonly ally: true;
        readonly dead: false;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInsideAlly
        extends Entity.OwnerHostInside<"Player"> {
        readonly ally: true;
        readonly dead: false;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        shoot: () => void;
        shootPrivately: () => void;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export interface Dead extends Entity.Default<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface HostDead extends Entity.Host<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerDead extends Entity.Owner<"Player"> {
        readonly ally: false;
        readonly dead: true;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        shoot: () => void;
        myUserId: any;
        randomNumber: any;
    }

    export interface InsideDead extends Entity.Inside<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface HostInsideDead
        extends Entity.HostInside<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInsideDead
        extends Entity.OwnerInside<"Player"> {
        readonly ally: false;
        readonly dead: true;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        shoot: () => void;
        myUserId: any;
        randomNumber: any;
    }

    export interface OwnerHostDead
        extends Entity.OwnerHost<"Player"> {
        readonly ally: false;
        readonly dead: true;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        shoot: () => void;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInsideDead
        extends Entity.OwnerHostInside<"Player"> {
        readonly ally: false;
        readonly dead: true;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        shoot: () => void;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export interface AllyDead extends Entity.Default<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface HostAllyDead extends Entity.Host<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerAllyDead extends Entity.Owner<"Player"> {
        readonly ally: true;
        readonly dead: true;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        myUserId: any;
        randomNumber: any;
    }

    export interface InsideAllyDead extends Entity.Inside<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly myUserId: any;
        readonly randomNumber: any;
    }

    export interface HostInsideAllyDead
        extends Entity.HostInside<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: string;
        readonly power: number;
        superPublic: string;
        readonly immutable: string;
        readonly health: number;
        readonly myUserId: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInsideAllyDead
        extends Entity.OwnerInside<"Player"> {
        readonly ally: true;
        readonly dead: true;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        myUserId: any;
        randomNumber: any;
    }

    export interface OwnerHostAllyDead
        extends Entity.OwnerHost<"Player"> {
        readonly ally: true;
        readonly dead: true;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInsideAllyDead
        extends Entity.OwnerHostInside<"Player"> {
        readonly ally: true;
        readonly dead: true;

        name: string;
        power: number;
        superPublic: string;
        secret: string;
        readonly immutable: string;
        readonly immutableSecret: string;
        health: number;
        myUserId: any;
        randomNumber: any;
        kick: () => void;
    }

    export type Variants =
        | Default
        | Host
        | Owner
        | Inside
        | HostInside
        | OwnerInside
        | OwnerHost
        | OwnerHostInside
        | Ally
        | HostAlly
        | OwnerAlly
        | InsideAlly
        | HostInsideAlly
        | OwnerInsideAlly
        | OwnerHostAlly
        | OwnerHostInsideAlly
        | Dead
        | HostDead
        | OwnerDead
        | InsideDead
        | HostInsideDead
        | OwnerInsideDead
        | OwnerHostDead
        | OwnerHostInsideDead
        | AllyDead
        | HostAllyDead
        | OwnerAllyDead
        | InsideAllyDead
        | HostInsideAllyDead
        | OwnerInsideAllyDead
        | OwnerHostAllyDead
        | OwnerHostInsideAllyDead;
}

export interface Entities extends SharedIOSchema {
    Player: EntityListSchema<Player.Variants>;
}
