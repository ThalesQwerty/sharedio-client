/*
            This file has been generated automatically by SharedIO.
            Please don't edit it unless you're 100% sure of what you're doing.
        */

import type { SharedIOSchema, EntityListSchema } from "../../lib";

interface Entity {
    readonly id: string;
    readonly type: string;
    readonly owned: boolean;

    readonly delete: () => void;
}

interface Channel extends Entity {
    readonly inside: boolean;

    readonly join: () => void;
    readonly leave: () => void;
}

namespace TestEntity {
    export interface Default extends Entity {
        readonly owned: false;
        readonly roles: {
            owner: false;
        };
        readonly name: string;
        readonly power: number;
        readonly constant: string;
        readonly idk: undefined;
        readonly test: number;
    }
    export interface Owner extends Entity {
        readonly owned: true;
        readonly roles: {
            owner: true;
        };
        name: string;
        readonly power: number;
        right: boolean;
        readonly constant: string;
        idk: undefined;
        readonly test: number;
        method: (...args: any[]) => any;
    }
}

export type TestEntity = TestEntity.Default | TestEntity.Owner;

namespace SharedChannel {
    export interface Default extends Channel {
        readonly owned: false;
        readonly inside: false;
        readonly roles: {};
    }
}

export type SharedChannel = SharedChannel.Default;

export interface Schema extends SharedIOSchema {
    TestEntity: EntityListSchema<TestEntity>;
    SharedChannel: EntityListSchema<SharedChannel>;
}

export default Schema;
