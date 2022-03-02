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

export namespace Player {
    export interface Default extends Entity.Default<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly randomNumber: any;
    }

    export interface Host extends Entity.Host<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface Owner extends Entity.Owner<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly shoot: () => void;
        readonly shootPrivately: () => void;
        readonly randomNumber: any;
    }

    export interface inside extends Entity.inside<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly randomNumber: any;
    }

    export interface HostInsider
        extends Entity.HostInsider<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInsider
        extends Entity.OwnerInsider<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly shoot: () => void;
        readonly shootPrivately: () => void;
        readonly randomNumber: any;
    }

    export interface OwnerHost extends Entity.OwnerHost<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly shootPrivately: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInsider
        extends Entity.OwnerHostInsider<"Player"> {
        readonly ally: false;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly shootPrivately: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface Ally extends Entity.Default<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly randomNumber: any;
    }

    export interface HostAlly extends Entity.Host<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerAlly extends Entity.Owner<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly shootPrivately: () => void;
        readonly randomNumber: any;
    }

    export interface insideAlly extends Entity.inside<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly randomNumber: any;
    }

    export interface HostInsiderAlly
        extends Entity.HostInsider<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInsiderAlly
        extends Entity.OwnerInsider<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly shootPrivately: () => void;
        readonly randomNumber: any;
    }

    export interface OwnerHostAlly
        extends Entity.OwnerHost<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly shootPrivately: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInsiderAlly
        extends Entity.OwnerHostInsider<"Player"> {
        readonly ally: true;
        readonly dead: false;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly shootPrivately: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface Dead extends Entity.Default<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly randomNumber: any;
    }

    export interface HostDead extends Entity.Host<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerDead extends Entity.Owner<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly shoot: () => void;
        readonly randomNumber: any;
    }

    export interface insideDead extends Entity.inside<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly randomNumber: any;
    }

    export interface HostInsiderDead
        extends Entity.HostInsider<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly damage: () => void;
        readonly shoot: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInsiderDead
        extends Entity.OwnerInsider<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly shoot: () => void;
        readonly randomNumber: any;
    }

    export interface OwnerHostDead
        extends Entity.OwnerHost<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInsiderDead
        extends Entity.OwnerHostInsider<"Player"> {
        readonly ally: false;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly shoot: () => void;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface AllyDead extends Entity.Default<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly randomNumber: any;
    }

    export interface HostAllyDead extends Entity.Host<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerAllyDead extends Entity.Owner<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly randomNumber: any;
    }

    export interface insideAllyDead extends Entity.inside<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly randomNumber: any;
    }

    export interface HostInsiderAllyDead
        extends Entity.HostInsider<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly health: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerInsiderAllyDead
        extends Entity.OwnerInsider<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly randomNumber: any;
    }

    export interface OwnerHostAllyDead
        extends Entity.OwnerHost<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export interface OwnerHostInsiderAllyDead
        extends Entity.OwnerHostInsider<"Player"> {
        readonly ally: true;
        readonly dead: true;

        readonly name: any;
        readonly power: any;
        readonly secret: any;
        readonly immutableSecret: any;
        readonly health: any;
        readonly randomNumber: any;
        kick: () => void;
    }

    export type Variants =
        | Default
        | Host
        | Owner
        | inside
        | HostInsider
        | OwnerInsider
        | OwnerHost
        | OwnerHostInsider
        | Ally
        | HostAlly
        | OwnerAlly
        | insideAlly
        | HostInsiderAlly
        | OwnerInsiderAlly
        | OwnerHostAlly
        | OwnerHostInsiderAlly
        | Dead
        | HostDead
        | OwnerDead
        | insideDead
        | HostInsiderDead
        | OwnerInsiderDead
        | OwnerHostDead
        | OwnerHostInsiderDead
        | AllyDead
        | HostAllyDead
        | OwnerAllyDead
        | insideAllyDead
        | HostInsiderAllyDead
        | OwnerInsiderAllyDead
        | OwnerHostAllyDead
        | OwnerHostInsiderAllyDead;
}

export interface Entities extends SharedIOSchema {
    Player: EntityListSchema<Player.Variants>;
}
