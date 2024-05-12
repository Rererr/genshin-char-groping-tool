import {initialWeapons} from "@/app/genshin/lists/weaponList";
import {initialTypes} from "@/app/genshin/lists/typeList";
import {initialRegions} from "@/app/genshin/lists/regionList";
import {Region} from "@/app/genshin/interfaces/region";
import {Character} from "@/app/genshin/interfaces/character";
import {Weapon} from "@/app/genshin/interfaces/weapon";
import {Type} from "@/app/common/interfaces/type";

const regionMap: Record<string, Region> = initialRegions.reduce((map, region) => {
    map[region.id] = region;
    return map;
}, {} as Record<string, Region>);

const weaponMap: Record<string, Weapon> = initialWeapons.reduce((map, weapon) => {
    map[weapon.id] = weapon;
    return map;
}, {} as Record<string, Weapon>);

const typeMap: Record<string, Type> = initialTypes.reduce((map: Record<string, Type>, type) => {
    map[type.id] = type;
    return map;
}, {} as Record<string, Type>);


export const initialCharacters: Character[] = [
        {
            id: 'Sethos',
            name: 'セトス',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Sword'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Sethos/icon.png',
            splashArt: '/images/genshin/characters/Sethos/splash.png',
            rarity: 5,
            rank: 1
        },
        {
            id: 'Sigewinne',
            name: 'シグウィン',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Sigewinne/icon.png',
            splashArt: '/images/genshin/characters/Sigewinne/splash.png',
            rarity: 5,
            rank: 2
        },
        {
            id: 'Clorinde',
            name: 'クロリンデ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Sword'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Clorinde/icon.png',
            splashArt: '/images/genshin/characters/Clorinde/splash.png',
            rarity: 5,
            rank: 3
        },
        {
            id: 'Arlecchino',
            name: 'アルレッキーノ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Arlecchino/icon.png',
            splashArt: '/images/genshin/characters/Arlecchino/splash.png',
            rarity: 5,
            rank: 4
        },
        {
            id: 'Chiori',
            name: '千織',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/Chiori/icon.png',
            splashArt: '/images/genshin/characters/Chiori/splash.png',
            rarity: 5,
            rank: 5
        },
        {
            id: 'Gaming',
            name: '嘉明',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Gaming/icon.png',
            splashArt: '/images/genshin/characters/Gaming/splash.png',
            rarity: 4,
            rank: 6
        },
        {
            id: 'Xianyun',
            name: '閑雲',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Xianyun/icon.png',
            splashArt: '/images/genshin/characters/Xianyun/splash.png',
            rarity: 5,
            rank: 7
        },
        {
            id: 'Chevreuse',
            name: 'シュヴルーズ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Chevreuse/icon.png',
            splashArt: '/images/genshin/characters/Chevreuse/splash.png',
            rarity: 4,
            rank: 8
        },
        {
            id: 'Navia',
            name: 'ナヴィア',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/Navia/icon.png',
            splashArt: '/images/genshin/characters/Navia/splash.png',
            rarity: 5,
            rank: 9
        },
        {
            id: 'Charlotte',
            name: 'シャルロット',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Charlotte/icon.png',
            splashArt: '/images/genshin/characters/Charlotte/splash.png',
            rarity: 4,
            rank: 10
        },
        {
            id: 'Furina',
            name: 'フリーナ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Sword'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Furina/icon.png',
            splashArt: '/images/genshin/characters/Furina/splash.png',
            rarity: 5,
            rank: 11
        },
        {
            id: 'Neuvillette',
            name: 'ヌヴィレット',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Neuvillette/icon.png',
            splashArt: '/images/genshin/characters/Neuvillette/splash.png',
            rarity: 5,
            rank: 12
        },
        {
            id: 'Wriothesley',
            name: 'リオセスリ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Wriothesley/icon.png',
            splashArt: '/images/genshin/characters/Wriothesley/splash.png',
            rarity: 5,
            rank: 13
        },
        {
            id: 'Freminet',
            name: 'フレミネ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Freminet/icon.png',
            splashArt: '/images/genshin/characters/Freminet/splash.png',
            rarity: 4,
            rank: 14
        },
        {
            id: 'Lyney',
            name: 'リネ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Bow'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Lyney/icon.png',
            splashArt: '/images/genshin/characters/Lyney/splash.png',
            rarity: 5,
            rank: 15
        },
        {
            id: 'Lynette',
            name: 'リネット',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Sword'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Lynette/icon.png',
            splashArt: '/images/genshin/characters/Lynette/splash.png',
            rarity: 4,
            rank: 16
        },
        {
            id: 'Kirara',
            name: '綺良々',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Dendro'],
            icon: '/images/genshin/characters/Kirara/icon.png',
            splashArt: '/images/genshin/characters/Kirara/splash.png',
            rarity: 4,
            rank: 17
        },
        {
            id: 'Baizhu',
            name: '白朮',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Dendro'],
            icon: '/images/genshin/characters/Baizhu/icon.png',
            splashArt: '/images/genshin/characters/Baizhu/splash.png',
            rarity: 5,
            rank: 18
        },
        {
            id: 'Kaveh',
            name: 'カーヴェ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Dendro'],
            icon: '/images/genshin/characters/Kaveh/icon.png',
            splashArt: '/images/genshin/characters/Kaveh/splash.png',
            rarity: 4,
            rank: 19
        },
        {
            id: 'Dehya',
            name: 'ディシア',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Dehya/icon.png',
            splashArt: '/images/genshin/characters/Dehya/splash.png',
            rarity: 5,
            rank: 20
        },
        {
            id: 'Mika',
            name: 'ミカ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Mika/icon.png',
            splashArt: '/images/genshin/characters/Mika/splash.png',
            rarity: 4,
            rank: 21
        },
        {
            id: 'Alhaitham',
            name: 'アルハイゼン',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Sword'],
            type: typeMap['Dendro'],
            icon: '/images/genshin/characters/Alhaitham/icon.png',
            splashArt: '/images/genshin/characters/Alhaitham/splash.png',
            rarity: 5,
            rank: 22
        },
        {
            id: 'Yaoyao',
            name: 'ヨォーヨ',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Dendro'],
            icon: '/images/genshin/characters/Yaoyao/icon.png',
            splashArt: '/images/genshin/characters/Yaoyao/splash.png',
            rarity: 4,
            rank: 23
        },
        {
            id: 'Wanderer',
            name: '放浪者',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Wanderer/icon.png',
            splashArt: '/images/genshin/characters/Wanderer/splash.png',
            rarity: 5,
            rank: 24
        },
        {
            id: 'Faruzan',
            name: 'ファルザン',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Bow'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Faruzan/icon.png',
            splashArt: '/images/genshin/characters/Faruzan/splash.png',
            rarity: 4,
            rank: 25
        },
        {
            id: 'Layla',
            name: 'レイラ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Layla/icon.png',
            splashArt: '/images/genshin/characters/Layla/splash.png',
            rarity: 4,
            rank: 26
        },
        {
            id: 'Nahida',
            name: 'ナヒーダ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Dendro'],
            icon: '/images/genshin/characters/Nahida/icon.png',
            splashArt: '/images/genshin/characters/Nahida/splash.png',
            rarity: 5,
            rank: 27
        },
        {
            id: 'Candace',
            name: 'キャンディス',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Candace/icon.png',
            splashArt: '/images/genshin/characters/Candace/splash.png',
            rarity: 4,
            rank: 28
        },
        {
            id: 'Cyno',
            name: 'セノ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Cyno/icon.png',
            splashArt: '/images/genshin/characters/Cyno/splash.png',
            rarity: 5,
            rank: 29
        },
        {
            id: 'Nilou',
            name: 'ニーロウ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Sword'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Nilou/icon.png',
            splashArt: '/images/genshin/characters/Nilou/splash.png',
            rarity: 5,
            rank: 30
        },
        {
            id: 'Dori',
            name: 'ドリー',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Dori/icon.png',
            splashArt: '/images/genshin/characters/Dori/splash.png',
            rarity: 4,
            rank: 31
        },
        {
            id: 'Collei',
            name: 'コレイ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Bow'],
            type: typeMap['Dendro'],
            icon: '/images/genshin/characters/Collei/icon.png',
            splashArt: '/images/genshin/characters/Collei/splash.png',
            rarity: 4,
            rank: 32
        },
        {
            id: 'Tighnari',
            name: 'ティナリ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Bow'],
            type: typeMap['Dendro'],
            icon: '/images/genshin/characters/Tighnari/icon.png',
            splashArt: '/images/genshin/characters/Tighnari/splash.png',
            rarity: 5,
            rank: 33
        },
        {
            id: 'ShikanoinHeizou',
            name: '鹿野院平蔵',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/ShikanoinHeizou/icon.png',
            splashArt: '/images/genshin/characters/ShikanoinHeizou/splash.png',
            rarity: 4,
            rank: 34
        },
        {
            id: 'KukiShinobu',
            name: '九鬼忍',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/KukiShinobu/icon.png',
            splashArt: '/images/genshin/characters/KukiShinobu/splash.png',
            rarity: 4,
            rank: 35
        },
        {
            id: 'Yelan',
            name: '夜蘭',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Bow'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Yelan/icon.png',
            splashArt: '/images/genshin/characters/Yelan/splash.png',
            rarity: 5,
            rank: 36
        },
        {
            id: 'Xiao',
            name: '魈',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Xiao/icon.png',
            splashArt: '/images/genshin/characters/Xiao/splash.png',
            rarity: 5,
            rank: 37
        },
        {
            id: 'Xiangling',
            name: '香菱',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Xiangling/icon.png',
            splashArt: '/images/genshin/characters/Xiangling/splash.png',
            rarity: 4,
            rank: 38
        },
        {
            id: 'RaidenShogun',
            name: '雷電将軍',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/RaidenShogun/icon.png',
            splashArt: '/images/genshin/characters/RaidenShogun/splash.png',
            rarity: 5,
            rank: 39
        },
        {
            id: 'Razor',
            name: 'レザー',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Razor/icon.png',
            splashArt: '/images/genshin/characters/Razor/splash.png',
            rarity: 4,
            rank: 40
        },
        {
            id: 'Albedo',
            name: 'アルベド',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/Albedo/icon.png',
            splashArt: '/images/genshin/characters/Albedo/splash.png',
            rarity: 5,
            rank: 41
        },
        {
            id: 'Zhongli',
            name: '鍾離',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/Zhongli/icon.png',
            splashArt: '/images/genshin/characters/Zhongli/splash.png',
            rarity: 5,
            rank: 42
        },
        {
            id: 'Chongyun',
            name: '重雲',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Chongyun/icon.png',
            splashArt: '/images/genshin/characters/Chongyun/splash.png',
            rarity: 4,
            rank: 43
        },
        {
            id: 'Diona',
            name: 'ディオナ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Diona/icon.png',
            splashArt: '/images/genshin/characters/Diona/splash.png',
            rarity: 4,
            rank: 44
        },
        {
            id: 'Diluc',
            name: 'ディルック',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Diluc/icon.png',
            splashArt: '/images/genshin/characters/Diluc/splash.png',
            rarity: 5,
            rank: 45
        },
        {
            id: 'Tartaglia',
            name: 'タルタリヤ',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Bow'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Tartaglia/icon.png',
            splashArt: '/images/genshin/characters/Tartaglia/splash.png',
            rarity: 5,
            rank: 46
        },
        {
            id: 'Xinyan',
            name: '辛炎',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Xinyan/icon.png',
            splashArt: '/images/genshin/characters/Xinyan/splash.png',
            rarity: 4,
            rank: 47
        },
        {
            id: 'Noelle',
            name: 'ノエル',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/Noelle/icon.png',
            splashArt: '/images/genshin/characters/Noelle/splash.png',
            rarity: 4,
            rank: 48
        },
        {
            id: 'Xingqiu',
            name: '行秋',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Sword'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Xingqiu/icon.png',
            splashArt: '/images/genshin/characters/Xingqiu/splash.png',
            rarity: 4,
            rank: 49
        },
        {
            id: 'Fischl.png',
            name: 'フィッシュル',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Fischl/icon.png',
            splashArt: '/images/genshin/characters/Fischl/splash.png',
            rarity: 4,
            rank: 50
        },
        {
            id: 'Mona',
            name: 'モナ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Mona/icon.png',
            splashArt: '/images/genshin/characters/Mona/splash.png',
            rarity: 5,
            rank: 51
        },
        {
            id: 'AratakiItto',
            name: '荒瀧一斗',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/AratakiItto/icon.png',
            splashArt: '/images/genshin/characters/AratakiItto/splash.png',
            rarity: 5,
            rank: 52
        },
        {
            id: 'Barbara',
            name: 'バーバラ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/Barbara/icon.png',
            splashArt: '/images/genshin/characters/Barbara/splash.png',
            rarity: 4,
            rank: 53
        },
        {
            id: 'HuTao',
            name: '胡桃',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/HuTao/icon.png',
            splashArt: '/images/genshin/characters/HuTao/splash.png',
            rarity: 5,
            rank: 54
        },
        {
            id: 'Rosaria',
            name: 'ロサリア',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Rosaria/icon.png',
            splashArt: '/images/genshin/characters/Rosaria/splash.png',
            rarity: 4,
            rank: 55
        },
        {
            id: 'KamisatoAyaka',
            name: '神里綾華',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/KamisatoAyaka/icon.png',
            splashArt: '/images/genshin/characters/KamisatoAyaka/splash.png',
            rarity: 5,
            rank: 56
        },
        {
            id: 'KamisatoAyato',
            name: '神里綾斗',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/KamisatoAyato/icon.png',
            splashArt: '/images/genshin/characters/KamisatoAyato/splash.png',
            rarity: 5,
            rank: 57
        },
        {
            id: 'Sucrose',
            name: 'スクロース',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Sucrose/icon.png',
            splashArt: '/images/genshin/characters/Sucrose/splash.png',
            rarity: 4,
            rank: 58
        },
        {
            id: 'Shenhe',
            name: '申鶴',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Shenhe/icon.png',
            splashArt: '/images/genshin/characters/Shenhe/splash.png',
            rarity: 5,
            rank: 59
        },
        {
            id: 'Ganyu',
            name: '甘雨',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Bow'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Ganyu/icon.png',
            splashArt: '/images/genshin/characters/Ganyu/splash.png',
            rarity: 5,
            rank: 60
        },
        {
            id: 'Jean',
            name: 'ジン',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Jean/icon.png',
            splashArt: '/images/genshin/characters/Jean/splash.png',
            rarity: 5,
            rank: 61
        },
        {
            id: 'Bennett',
            name: 'ベネット',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Bennett/icon.png',
            splashArt: '/images/genshin/characters/Bennett/splash.png',
            rarity: 4,
            rank: 62
        },
        {
            id: 'SangonomiyaKokomi',
            name: '珊瑚宮心海',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/genshin/characters/SangonomiyaKokomi/icon.png',
            splashArt: '/images/genshin/characters/SangonomiyaKokomi/splash.png',
            rarity: 5,
            rank: 63
        },
        {
            id: 'Yanfei',
            name: '煙緋',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Yanfei/icon.png',
            splashArt: '/images/genshin/characters/Yanfei/splash.png',
            rarity: 4,
            rank: 64
        },
        {
            id: 'Venti',
            name: 'ウェンティ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Venti/icon.png',
            splashArt: '/images/genshin/characters/Venti/splash.png',
            rarity: 5,
            rank: 65
        },
        {
            id: 'KaedeharaKazuha',
            name: '楓原万葉',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/KaedeharaKazuha/icon.png',
            splashArt: '/images/genshin/characters/KaedeharaKazuha/splash.png',
            rarity: 5,
            rank: 66
        },
        {
            id: 'Sayu',
            name: '早柚',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Sayu/icon.png',
            splashArt: '/images/genshin/characters/Sayu/splash.png',
            rarity: 4,
            rank: 67
        },
        {
            id: 'Thoma',
            name: 'トーマ',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Thoma/icon.png',
            splashArt: '/images/genshin/characters/Thoma/splash.png',
            rarity: 4,
            rank: 68
        },
        {
            id: 'Yoimiya',
            name: '宵宮',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Bow'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Yoimiya/icon.png',
            splashArt: '/images/genshin/characters/Yoimiya/splash.png',
            rarity: 5,
            rank: 69
        },
        {
            id: 'Amber',
            name: 'アンバー',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Amber/icon.png',
            splashArt: '/images/genshin/characters/Amber/splash.png',
            rarity: 4,
            rank: 70
        },
        {
            id: 'Aloy',
            name: 'アーロイ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Aloy/icon.png',
            splashArt: '/images/genshin/characters/Aloy/splash.png',
            rarity: 5,
            rank: 71
        },
        {
            id: 'Klee',
            name: 'クレー',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Pyro'],
            icon: '/images/genshin/characters/Klee/icon.png',
            splashArt: '/images/genshin/characters/Klee/splash.png',
            rarity: 5,
            rank: 72
        },
        {
            id: 'Beidou',
            name: '北斗',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Beidou/icon.png',
            splashArt: '/images/genshin/characters/Beidou/splash.png',
            rarity: 4,
            rank: 73
        },
        {
            id: 'Keqing',
            name: '刻晴',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Sword'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Keqing/icon.png',
            splashArt: '/images/genshin/characters/Keqing/splash.png',
            rarity: 5,
            rank: 74
        },
        {
            id: 'Kaeya',
            name: 'ガイア',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Kaeya/icon.png',
            splashArt: '/images/genshin/characters/Kaeya/splash.png',
            rarity: 4,
            rank: 75
        },
        {
            id: 'Ningguang',
            name: '凝光',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/Ningguang/icon.png',
            splashArt: '/images/genshin/characters/Ningguang/splash.png',
            rarity: 4,
            rank: 76
        },
        {
            id: 'YaeMiko',
            name: '八重神子',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/YaeMiko/icon.png',
            splashArt: '/images/genshin/characters/YaeMiko/splash.png',
            rarity: 5,
            rank: 77
        },
        {
            id: 'Eula',
            name: 'エウルア',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Eula/icon.png',
            splashArt: '/images/genshin/characters/Eula/splash.png',
            rarity: 5,
            rank: 78
        },
        {
            id: 'Gorou',
            name: 'ゴロー',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Bow'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/Gorou/icon.png',
            splashArt: '/images/genshin/characters/Gorou/splash.png',
            rarity: 4,
            rank: 79
        },
        {
            id: 'YunJin',
            name: '雲菫',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Geo'],
            icon: '/images/genshin/characters/YunJin/icon.png',
            splashArt: '/images/genshin/characters/YunJin/splash.png',
            rarity: 4,
            rank: 80
        },
        {
            id: 'KujouSara',
            name: '九条裟羅',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Bow'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/KujouSara/icon.png',
            splashArt: '/images/genshin/characters/KujouSara/splash.png',
            rarity: 4,
            rank: 81
        },
        {
            id: 'Lisa',
            name: 'リサ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Electro'],
            icon: '/images/genshin/characters/Lisa/icon.png',
            splashArt: '/images/genshin/characters/Lisa/splash.png',
            rarity: 4,
            rank: 82
        },
        {
            id: 'Qiqi',
            name: '七七',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/genshin/characters/Qiqi/icon.png',
            splashArt: '/images/genshin/characters/Qiqi/splash.png',
            rarity: 5,
            rank: 83
        },
        {
            id: 'Traveler',
            name: '旅人',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Anemo'],
            icon: '/images/genshin/characters/Traveler/icon.png',
            splashArt: '/images/genshin/characters/Traveler/splash.png',
            rarity: 5,
            rank: 84
        },
    ]
;