import type { KeyValue } from ".";
import type { EntityAttribute, SharedIOEntity, SerializedEntity } from "../schema";

export interface SharedIOBaseResponse {
    action: "auth"|"ping"|"view";
}

export interface AuthResponse {
    action: "auth",
    token: string,
    userId: string
}

export interface PingResponse {
    action: "ping",
    packetId: string,
    roundTripTime: number,
    packetLossRatio: number
}

export interface ViewResponse {
    action: "view",
    add: KeyValue<SerializedEntity>,
    remove: string[]
}

export type Response = AuthResponse|PingResponse|ViewResponse;