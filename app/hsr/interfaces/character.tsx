import {BaseCharacter, createDummyCharacter} from "@/app/common/interfaces/baseCharacter";
import {Destiny} from "@/app/hsr/interfaces/destiny";

export interface Character extends BaseCharacter {
    destiny: Destiny;
}

export const createDummyCharacters = (count: number): Character[] => {
    const dummyCharacters: Character[] = [];
    for (let i = 0; i < count; i++) {
        dummyCharacters.push(createDummyCharacter('hsr') as Character);
    }
    return dummyCharacters;
}