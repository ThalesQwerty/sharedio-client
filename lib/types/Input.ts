import type { KeyValue } from "./KeyValue";

interface SharedIOBaseInput {
    type: "auth"|"pong"|"write"|"call";
    id: string;
    data: KeyValue
}

export interface AuthInput extends SharedIOBaseInput {
    type: "auth";
    data: {
        token: string | null;
    }
}

export interface PongInput extends SharedIOBaseInput {
    type: "pong";
    data: {
        packetId: string;
    }
}

export interface WriteInput extends SharedIOBaseInput {
    type: "write";
    data: {
        entityId: string;
        properties: KeyValue;
    }
}

export interface CallInput extends SharedIOBaseInput {
    type: "call";
    data: {
        entityId: string;
        methodName: string;
        parameters: unknown[];
    }
}

export type Input =
    | AuthInput
    | PongInput
    | WriteInput
    | CallInput;