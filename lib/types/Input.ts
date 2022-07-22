import type { KeyValue } from "./KeyValue";

interface SharedIOBaseInput {
    type: "auth"|"pong"|"write"|"call";
    channel?: string;
    id: string;
    data: KeyValue
}

export interface AuthInput extends SharedIOBaseInput {
    type: "auth";
    channel?: undefined;
    data: {
        token: string | null;
    }
}

export interface PongInput extends SharedIOBaseInput {
    type: "pong";
    channel?: undefined;
    data: {
        packetId: string;
    }
}

export interface WriteInput extends SharedIOBaseInput {
    type: "write";
    channel: string;
    data: {
        entity: string;
        properties: KeyValue;
    }
}

export interface CallInput extends SharedIOBaseInput {
    type: "call";
    channel: string;
    data: {
        entity: string;
        methodName: string;
        parameters: unknown[];
    }
}

export type Input =
    | AuthInput
    | PongInput
    | WriteInput
    | CallInput;