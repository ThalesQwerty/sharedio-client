import type { ListenerOverloads, EmitterOverloads } from "../utils";
import type { SharedIOSchema } from "../schema";

interface SharedIOEvent {}

interface SharedIOCloseEvent extends SharedIOEvent {}
interface SharedIOOpenEvent extends SharedIOEvent {}
interface SharedIOUpdateEvent<Schema extends SharedIOSchema = SharedIOSchema> extends SharedIOEvent {
    view: Schema;
}

type CloseHandler = (event: SharedIOCloseEvent) => void;
type OpenHandler = (event: SharedIOOpenEvent) => void;
type UpdateHandler<Schema extends SharedIOSchema = SharedIOSchema> = (event: SharedIOUpdateEvent<Schema>) => void;

export interface SharedIOEvents<Schema extends SharedIOSchema = SharedIOSchema> {
    update?: UpdateHandler<Schema>[];
    open?: OpenHandler[];
    close?: CloseHandler[];
}

export type SharedIOEventName = keyof SharedIOEvents;
export interface SharedIOEventListenerOverloads<Schema extends SharedIOSchema = SharedIOSchema>
    extends ListenerOverloads<SharedIOEvents> {
    /**
     * This function will be called when the connection closes
     */
    (event: "close", callback: CloseHandler): void;

    /**
     * This function will be called when the connection opens
     */
    (event: "open", callback: OpenHandler): void;

    /**
     * This function will be called when the user view updates
     */
    (event: "update", callback: UpdateHandler<Schema>): void;
}

export interface SharedIOEventEmitterOverloads<Schema extends SharedIOSchema = SharedIOSchema>
    extends EmitterOverloads<SharedIOEvents> {
    (event: "update", props: SharedIOUpdateEvent<Schema>): void;
    (event: "open"): void;
    (event: "close"): void;
}
