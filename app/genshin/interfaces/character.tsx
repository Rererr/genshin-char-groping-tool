import {Region} from "@/app/genshin/interfaces/region";
import {Weapon} from "@/app/genshin/interfaces/weapon";
import {BaseCharacter, createDummyCharacter} from "@/app/common/interfaces/baseCharacter";

export interface Character extends BaseCharacter {
    region: Region;
    weapon: Weapon;
}

export const createDummyCharacters = (count: number): Character[] => {
    const dummyCharacters: Character[] = [];
    for (let i = 0; i < count; i++) {
        dummyCharacters.push(createDummyCharacter('genshin') as Character);
    }
    return dummyCharacters;
};