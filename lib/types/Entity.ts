import type { KeyValue } from ".";

export interface Entity {
    owner: string|null,
    id: string,
    state: KeyValue,
    actions: string[]
}