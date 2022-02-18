import type { SharedIOSchema, EntitySchema } from "../../lib";

export interface TestSchema extends SharedIOSchema {
    Player: {
        mine: {
            readonly owned: true,
            readonly id: `Entity_${string}`,
            readonly type: "Player",

            name: string,
            power: number,
            secret: string,
            readonly immutable: string,
            readonly immutableSecret: string,
            readonly randomNumber: number,

            shoot: () => void,
            shootPrivately: () => void,
        }[],
        theirs: {
            readonly owned: false,
            readonly id: `Entity_${string}`,
            readonly type: "Player",

            readonly name: string,
            readonly power: number,
            readonly immutable: string,
            readonly randomNumber: number

            shoot: () => void
        }[]
    }
}