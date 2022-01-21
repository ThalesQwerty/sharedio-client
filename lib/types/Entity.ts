import type { KeyValue } from ".";

export interface Entity {
    owned: boolean,
    id: string,
    state: KeyValue,
    actions: string[]
}