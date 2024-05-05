import {Region} from "@/app/interfaces/region";
import {Weapon} from "@/app/interfaces/weapon";
import {Type} from "@/app/interfaces/type";


export interface Character {
    id: string;
    name: string;
    region: Region;
    weapon: Weapon;
    type: Type;
    icon: string;
    splashArt: string;
    rarity: number;
    rank: number;
}

export const createDummyCharacters = (count: number): Character[] => {
    const dummyCharacters: Character[] = [];
    for (let i = 0; i < count; i++) {
        dummyCharacters.push(createDummyCharacter());
    }
    return dummyCharacters;
};

// 一つのダミーキャラクターを生成する関数
export const createDummyCharacter = (): Character => {
    return {
        id: `dummy${Math.random().toString(36).substring(2, 9)}`,  // ランダムなIDを生成
        name: '',
        region: {
            id: '',
            name: '',
            image: '',
        },
        weapon: {
            id: '',
            name: '',
            image: '',
        },
        type: {
            id: '',
            name: '',
            image: '',
        },
        icon: '',
        splashArt: '',
        rarity: 0,
        rank: 0,
    };
};

// キャラクターがダミーかどうかを判定する関数
export const isDummyCharacter = (character: Character): boolean => {
    return character.id.startsWith('dummy');
};
