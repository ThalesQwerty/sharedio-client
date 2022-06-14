import type { SerializedEntity } from "../schema";
import type { KeyValue } from "./KeyValue";

export interface SharedIOBaseOutput {
    type: "auth" | "ping" | "view" | "write" | "call" | "return";
    id: string;
    data: KeyValue;
}

export interface AuthOutput extends SharedIOBaseOutput {
    type: "auth";
    data: {
        userId: string;
        token: string;
    }
}

export interface PingOutput extends SharedIOBaseOutput {
    type: "ping";
    data: {
        packetId: string;
        roundTripTime: number;
        packetLossRatio: number;
    }
}

export interface ViewOutput extends SharedIOBaseOutput {
    type: "view";
    data: {
        add: KeyValue<SerializedEntity>,
        remove: string[]
    }
}

export interface WriteOutput extends SharedIOBaseOutput {
    type: "write";
    data: {
        entityId: string;
        properties: KeyValue;
    }
}

export interface CallOutput extends SharedIOBaseOutput {
    type: "call";
    data: {
        entityId: string;
        methodName: string;
        parameters: unknown[];
    }
}

export interface ReturnOutput extends SharedIOBaseOutput {
    type: "return";
    data: {
        inputId: string,
        returnedValue: unknown
    },
    private: true
}

export type Output =
    | AuthOutput
    | PingOutput
    | ViewOutput
    | WriteOutput
    | CallOutput
    | ReturnOutput;