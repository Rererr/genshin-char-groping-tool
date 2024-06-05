import {Character as GenshinCharacter} from "@/app/genshin/interfaces/character";
import {Character as HsrCharacter} from "@/app/hsr/interfaces/character";
import {Type} from "@/app/common/interfaces/type";

export interface BaseCharacter {
    id: string;
    name: string;
    type: Type;
    icon: string;
    splashArt: string;
    rarity: number;
}

// ダミーキャラクター生成関数 (汎用)
export const createDummyCharacter = (type: 'genshin' | 'hsr'): GenshinCharacter|HsrCharacter => {
    const baseDummy = {
        id: `dummy${Math.random().toString(36).substring(2, 9)}`,
        name: '',
        type: {
            id: '',
            name: '',
            image: '',
        },
        icon: '',
        splashArt: '',
        rarity: 0,
    };

    if (type === 'genshin') {
        return {
            ...baseDummy,
            region: {id: '', name: '', image: ''},
            weapon: {id: '', name: '', image: ''}
        } as GenshinCharacter;
    } else {
        return {
            ...baseDummy,
            destiny: {id: '', name: '', image: ''}
        } as HsrCharacter;
    }
};

// ダミー判定関数
export const isDummyCharacter = (character: BaseCharacter): boolean => {
    return character.id.startsWith('dummy');
};
