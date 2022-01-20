import type { Entity, KeyValue } from ".";

export interface AuthMessage {
    action: "auth",
    token: string,
    userId: string
}

export interface PingMessage {
    action: "ping",
    packetId: string,
    roundTripTime: number,
    packetLossRatio: number
}

export interface ViewMessage {
    action: "view",
    add: KeyValue<Entity>,
    remove: string[]
}

export type Message = AuthMessage|PingMessage|ViewMessage;