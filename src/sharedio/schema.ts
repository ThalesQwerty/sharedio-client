import type { SharedIOSchema, EntityListSchema } from "../../lib";
interface Player {
    readonly owned: boolean,
    readonly id: `Entity_${string}`,
    readonly type: "Player",

    readonly name: string,
    readonly power: number,
    readonly immutable: string,
    readonly randomNumber: number,

    shoot: () => void,
}

interface MyPlayer extends Player {
    owned: true,

    name: string,
    power: number,
    secret: string,
    readonly immutableSecret: string,

    shootPrivately: () => void,
}
export interface TestSchema extends SharedIOSchema {
    Player: EntityListSchema<Player, MyPlayer>
}