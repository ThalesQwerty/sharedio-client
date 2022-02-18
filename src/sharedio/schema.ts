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
            randomNumber: number,

            shoot: () => void,
            shootPrivately: () => void,
        }[],
        theirs: {
            readonly owned: false,
            readonly id: `Entity_${string}`,
            readonly type: "Player",

            name: string,
            power: number,
            randomNumber: number

            shoot: () => void
        }[]
    }
}