import type { KeyValue } from '.';

export interface SharedIOBaseRequest {
    action: "auth"|"pong"|"write"|"call";
}

export interface SharedIOBaseAction extends SharedIOBaseRequest {
    entityId: string;
}

export interface AuthRequest extends SharedIOBaseRequest {
    action: "auth";
    token: string | null;
}

export interface PongRequest extends SharedIOBaseRequest {
    action: "pong";
    packetId: string;
}

export interface WriteRequest extends SharedIOBaseAction {
    action: "write";
    props: KeyValue;
}

export interface CallRequest extends SharedIOBaseAction {
    action: "call";
    methodName: string,
    params: unknown
}

export type SharedIORequest = AuthRequest|PongRequest|WriteRequest|CallRequest;