import {initialWeapons} from "@/app/lists/weaponList";
import {initialTypes} from "@/app/lists/typeList";
import {initialRegions} from "@/app/lists/regionList";
import {Region} from "@/app/interfaces/region";
import {Character} from "@/app/interfaces/character";
import {Weapon} from "@/app/interfaces/weapon";
import {Type} from "@/app/interfaces/type";

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
            icon: '/images/characters/Sethos/icon.png',
            splashArt: '/images/characters/Sethos/splash.png',
            rarity: 5,
            rank: 1
        },
        {
            id: 'Sigewinne',
            name: 'シグウィン',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Sigewinne/icon.png',
            splashArt: '/images/characters/Sigewinne/splash.png',
            rarity: 5,
            rank: 2
        },
        {
            id: 'Clorinde',
            name: 'クロリンデ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Sword'],
            type: typeMap['Electro'],
            icon: '/images/characters/Clorinde/icon.png',
            splashArt: '/images/characters/Clorinde/splash.png',
            rarity: 5,
            rank: 3
        },
        {
            id: 'Arlecchino',
            name: 'アルレッキーノ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Arlecchino/icon.png',
            splashArt: '/images/characters/Arlecchino/splash.png',
            rarity: 5,
            rank: 4
        },
        {
            id: 'Chiori',
            name: '千織',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Geo'],
            icon: '/images/characters/Chiori/icon.png',
            splashArt: '/images/characters/Chiori/splash.png',
            rarity: 5,
            rank: 5
        },
        {
            id: 'Gaming',
            name: '嘉明',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Gaming/icon.png',
            splashArt: '/images/characters/Gaming/splash.png',
            rarity: 4,
            rank: 6
        },
        {
            id: 'Xianyun',
            name: '閑雲',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Xianyun/icon.png',
            splashArt: '/images/characters/Xianyun/splash.png',
            rarity: 5,
            rank: 7
        },
        {
            id: 'Chevreuse',
            name: 'シュヴルーズ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Electro'],
            icon: '/images/characters/Chevreuse/icon.png',
            splashArt: '/images/characters/Chevreuse/splash.png',
            rarity: 4,
            rank: 8
        },
        {
            id: 'Navia',
            name: 'ナヴィア',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Geo'],
            icon: '/images/characters/Navia/icon.png',
            splashArt: '/images/characters/Navia/splash.png',
            rarity: 5,
            rank: 9
        },
        {
            id: 'Charlotte',
            name: 'シャルロット',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Charlotte/icon.png',
            splashArt: '/images/characters/Charlotte/splash.png',
            rarity: 4,
            rank: 10
        },
        {
            id: 'Furina',
            name: 'フリーナ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Sword'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Furina/icon.png',
            splashArt: '/images/characters/Furina/splash.png',
            rarity: 5,
            rank: 11
        },
        {
            id: 'Neuvillette',
            name: 'ヌヴィレット',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Neuvillette/icon.png',
            splashArt: '/images/characters/Neuvillette/splash.png',
            rarity: 5,
            rank: 12
        },
        {
            id: 'Wriothesley',
            name: 'リオセスリ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Wriothesley/icon.png',
            splashArt: '/images/characters/Wriothesley/splash.png',
            rarity: 5,
            rank: 13
        },
        {
            id: 'Freminet',
            name: 'フレミネ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Freminet/icon.png',
            splashArt: '/images/characters/Freminet/splash.png',
            rarity: 4,
            rank: 14
        },
        {
            id: 'Lyney',
            name: 'リネ',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Bow'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Lyney/icon.png',
            splashArt: '/images/characters/Lyney/splash.png',
            rarity: 5,
            rank: 15
        },
        {
            id: 'Lynette',
            name: 'リネット',
            region: regionMap['Fontaine'],
            weapon: weaponMap['Sword'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Lynette/icon.png',
            splashArt: '/images/characters/Lynette/splash.png',
            rarity: 4,
            rank: 16
        },
        {
            id: 'Kirara',
            name: '綺良々',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Dendro'],
            icon: '/images/characters/Kirara/icon.png',
            splashArt: '/images/characters/Kirara/splash.png',
            rarity: 4,
            rank: 17
        },
        {
            id: 'Baizhu',
            name: '白朮',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Dendro'],
            icon: '/images/characters/Baizhu/icon.png',
            splashArt: '/images/characters/Baizhu/splash.png',
            rarity: 5,
            rank: 18
        },
        {
            id: 'Kaveh',
            name: 'カーヴェ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Dendro'],
            icon: '/images/characters/Kaveh/icon.png',
            splashArt: '/images/characters/Kaveh/splash.png',
            rarity: 4,
            rank: 19
        },
        {
            id: 'Dehya',
            name: 'ディシア',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Dehya/icon.png',
            splashArt: '/images/characters/Dehya/splash.png',
            rarity: 5,
            rank: 20
        },
        {
            id: 'Mika',
            name: 'ミカ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Mika/icon.png',
            splashArt: '/images/characters/Mika/splash.png',
            rarity: 4,
            rank: 21
        },
        {
            id: 'Alhaitham',
            name: 'アルハイゼン',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Sword'],
            type: typeMap['Dendro'],
            icon: '/images/characters/Alhaitham/icon.png',
            splashArt: '/images/characters/Alhaitham/splash.png',
            rarity: 5,
            rank: 22
        },
        {
            id: 'Yaoyao',
            name: 'ヨォーヨ',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Dendro'],
            icon: '/images/characters/Yaoyao/icon.png',
            splashArt: '/images/characters/Yaoyao/splash.png',
            rarity: 4,
            rank: 23
        },
        {
            id: 'Wanderer',
            name: '放浪者',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Wanderer/icon.png',
            splashArt: '/images/characters/Wanderer/splash.png',
            rarity: 5,
            rank: 24
        },
        {
            id: 'Faruzan',
            name: 'ファルザン',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Bow'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Faruzan/icon.png',
            splashArt: '/images/characters/Faruzan/splash.png',
            rarity: 4,
            rank: 25
        },
        {
            id: 'Layla',
            name: 'レイラ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Layla/icon.png',
            splashArt: '/images/characters/Layla/splash.png',
            rarity: 4,
            rank: 26
        },
        {
            id: 'Nahida',
            name: 'ナヒーダ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Dendro'],
            icon: '/images/characters/Nahida/icon.png',
            splashArt: '/images/characters/Nahida/splash.png',
            rarity: 5,
            rank: 27
        },
        {
            id: 'Candace',
            name: 'キャンディス',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Candace/icon.png',
            splashArt: '/images/characters/Candace/splash.png',
            rarity: 4,
            rank: 28
        },
        {
            id: 'Cyno',
            name: 'セノ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Electro'],
            icon: '/images/characters/Cyno/icon.png',
            splashArt: '/images/characters/Cyno/splash.png',
            rarity: 5,
            rank: 29
        },
        {
            id: 'Nilou',
            name: 'ニーロウ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Sword'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Nilou/icon.png',
            splashArt: '/images/characters/Nilou/splash.png',
            rarity: 5,
            rank: 30
        },
        {
            id: 'Dori',
            name: 'ドリー',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Electro'],
            icon: '/images/characters/Dori/icon.png',
            splashArt: '/images/characters/Dori/splash.png',
            rarity: 4,
            rank: 31
        },
        {
            id: 'Collei',
            name: 'コレイ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Bow'],
            type: typeMap['Dendro'],
            icon: '/images/characters/Collei/icon.png',
            splashArt: '/images/characters/Collei/splash.png',
            rarity: 4,
            rank: 32
        },
        {
            id: 'Tighnari',
            name: 'ティナリ',
            region: regionMap['Sumeru'],
            weapon: weaponMap['Bow'],
            type: typeMap['Dendro'],
            icon: '/images/characters/Tighnari/icon.png',
            splashArt: '/images/characters/Tighnari/splash.png',
            rarity: 5,
            rank: 33
        },
        {
            id: 'ShikanoinHeizou',
            name: '鹿野院平蔵',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Anemo'],
            icon: '/images/characters/ShikanoinHeizou/icon.png',
            splashArt: '/images/characters/ShikanoinHeizou/splash.png',
            rarity: 4,
            rank: 34
        },
        {
            id: 'KukiShinobu',
            name: '九鬼忍',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Electro'],
            icon: '/images/characters/KukiShinobu/icon.png',
            splashArt: '/images/characters/KukiShinobu/splash.png',
            rarity: 4,
            rank: 35
        },
        {
            id: 'Yelan',
            name: '夜蘭',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Bow'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Yelan/icon.png',
            splashArt: '/images/characters/Yelan/splash.png',
            rarity: 5,
            rank: 36
        },
        {
            id: 'Xiao',
            name: '魈',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Xiao/icon.png',
            splashArt: '/images/characters/Xiao/splash.png',
            rarity: 5,
            rank: 37
        },
        {
            id: 'Xiangling',
            name: '香菱',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Xiangling/icon.png',
            splashArt: '/images/characters/Xiangling/splash.png',
            rarity: 4,
            rank: 38
        },
        {
            id: 'RaidenShogun',
            name: '雷電将軍',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Electro'],
            icon: '/images/characters/RaidenShogun/icon.png',
            splashArt: '/images/characters/RaidenShogun/splash.png',
            rarity: 5,
            rank: 39
        },
        {
            id: 'Razor',
            name: 'レザー',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Electro'],
            icon: '/images/characters/Razor/icon.png',
            splashArt: '/images/characters/Razor/splash.png',
            rarity: 4,
            rank: 40
        },
        {
            id: 'Albedo',
            name: 'アルベド',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Geo'],
            icon: '/images/characters/Albedo/icon.png',
            splashArt: '/images/characters/Albedo/splash.png',
            rarity: 5,
            rank: 41
        },
        {
            id: 'Zhongli',
            name: '鍾離',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Geo'],
            icon: '/images/characters/Zhongli/icon.png',
            splashArt: '/images/characters/Zhongli/splash.png',
            rarity: 5,
            rank: 42
        },
        {
            id: 'Chongyun',
            name: '重雲',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Chongyun/icon.png',
            splashArt: '/images/characters/Chongyun/splash.png',
            rarity: 4,
            rank: 43
        },
        {
            id: 'Diona',
            name: 'ディオナ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Diona/icon.png',
            splashArt: '/images/characters/Diona/splash.png',
            rarity: 4,
            rank: 44
        },
        {
            id: 'Diluc',
            name: 'ディルック',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Diluc/icon.png',
            splashArt: '/images/characters/Diluc/splash.png',
            rarity: 5,
            rank: 45
        },
        {
            id: 'Tartaglia',
            name: 'タルタリヤ',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Bow'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Tartaglia/icon.png',
            splashArt: '/images/characters/Tartaglia/splash.png',
            rarity: 5,
            rank: 46
        },
        {
            id: 'Xinyan',
            name: '辛炎',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Xinyan/icon.png',
            splashArt: '/images/characters/Xinyan/splash.png',
            rarity: 4,
            rank: 47
        },
        {
            id: 'Noelle',
            name: 'ノエル',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Geo'],
            icon: '/images/characters/Noelle/icon.png',
            splashArt: '/images/characters/Noelle/splash.png',
            rarity: 4,
            rank: 48
        },
        {
            id: 'Xingqiu',
            name: '行秋',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Sword'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Xingqiu/icon.png',
            splashArt: '/images/characters/Xingqiu/splash.png',
            rarity: 4,
            rank: 49
        },
        {
            id: 'Fischl.png',
            name: 'フィッシュル',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Electro'],
            icon: '/images/characters/Fischl/icon.png',
            splashArt: '/images/characters/Fischl/splash.png',
            rarity: 4,
            rank: 50
        },
        {
            id: 'Mona',
            name: 'モナ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Mona/icon.png',
            splashArt: '/images/characters/Mona/splash.png',
            rarity: 5,
            rank: 51
        },
        {
            id: 'AratakiItto',
            name: '荒瀧一斗',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Geo'],
            icon: '/images/characters/AratakiItto/icon.png',
            splashArt: '/images/characters/AratakiItto/splash.png',
            rarity: 5,
            rank: 52
        },
        {
            id: 'Barbara',
            name: 'バーバラ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/characters/Barbara/icon.png',
            splashArt: '/images/characters/Barbara/splash.png',
            rarity: 4,
            rank: 53
        },
        {
            id: 'HuTao',
            name: '胡桃',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/characters/HuTao/icon.png',
            splashArt: '/images/characters/HuTao/splash.png',
            rarity: 5,
            rank: 54
        },
        {
            id: 'Rosaria',
            name: 'ロサリア',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Rosaria/icon.png',
            splashArt: '/images/characters/Rosaria/splash.png',
            rarity: 4,
            rank: 55
        },
        {
            id: 'KamisatoAyaka',
            name: '神里綾華',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/characters/KamisatoAyaka/icon.png',
            splashArt: '/images/characters/KamisatoAyaka/splash.png',
            rarity: 5,
            rank: 56
        },
        {
            id: 'KamisatoAyato',
            name: '神里綾斗',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Hydro'],
            icon: '/images/characters/KamisatoAyato/icon.png',
            splashArt: '/images/characters/KamisatoAyato/splash.png',
            rarity: 5,
            rank: 57
        },
        {
            id: 'Sucrose',
            name: 'スクロース',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Sucrose/icon.png',
            splashArt: '/images/characters/Sucrose/splash.png',
            rarity: 4,
            rank: 58
        },
        {
            id: 'Shenhe',
            name: '申鶴',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Shenhe/icon.png',
            splashArt: '/images/characters/Shenhe/splash.png',
            rarity: 5,
            rank: 59
        },
        {
            id: 'Ganyu',
            name: '甘雨',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Bow'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Ganyu/icon.png',
            splashArt: '/images/characters/Ganyu/splash.png',
            rarity: 5,
            rank: 60
        },
        {
            id: 'Jean',
            name: 'ジン',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Jean/icon.png',
            splashArt: '/images/characters/Jean/splash.png',
            rarity: 5,
            rank: 61
        },
        {
            id: 'Bennett',
            name: 'ベネット',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Bennett/icon.png',
            splashArt: '/images/characters/Bennett/splash.png',
            rarity: 4,
            rank: 62
        },
        {
            id: 'SangonomiyaKokomi',
            name: '珊瑚宮心海',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Hydro'],
            icon: '/images/characters/SangonomiyaKokomi/icon.png',
            splashArt: '/images/characters/SangonomiyaKokomi/splash.png',
            rarity: 5,
            rank: 63
        },
        {
            id: 'Yanfei',
            name: '煙緋',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Yanfei/icon.png',
            splashArt: '/images/characters/Yanfei/splash.png',
            rarity: 4,
            rank: 64
        },
        {
            id: 'Venti',
            name: 'ウェンティ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Venti/icon.png',
            splashArt: '/images/characters/Venti/splash.png',
            rarity: 5,
            rank: 65
        },
        {
            id: 'KaedeharaKazuha',
            name: '楓原万葉',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Sword'],
            type: typeMap['Anemo'],
            icon: '/images/characters/KaedeharaKazuha/icon.png',
            splashArt: '/images/characters/KaedeharaKazuha/splash.png',
            rarity: 5,
            rank: 66
        },
        {
            id: 'Sayu',
            name: '早柚',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Sayu/icon.png',
            splashArt: '/images/characters/Sayu/splash.png',
            rarity: 4,
            rank: 67
        },
        {
            id: 'Thoma',
            name: 'トーマ',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Thoma/icon.png',
            splashArt: '/images/characters/Thoma/splash.png',
            rarity: 4,
            rank: 68
        },
        {
            id: 'Yoimiya',
            name: '宵宮',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Bow'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Yoimiya/icon.png',
            splashArt: '/images/characters/Yoimiya/splash.png',
            rarity: 5,
            rank: 69
        },
        {
            id: 'Amber',
            name: 'アンバー',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Amber/icon.png',
            splashArt: '/images/characters/Amber/splash.png',
            rarity: 4,
            rank: 70
        },
        {
            id: 'Aloy',
            name: 'アーロイ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Bow'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Aloy/icon.png',
            splashArt: '/images/characters/Aloy/splash.png',
            rarity: 5,
            rank: 71
        },
        {
            id: 'Klee',
            name: 'クレー',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Pyro'],
            icon: '/images/characters/Klee/icon.png',
            splashArt: '/images/characters/Klee/splash.png',
            rarity: 5,
            rank: 72
        },
        {
            id: 'Beidou',
            name: '北斗',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Electro'],
            icon: '/images/characters/Beidou/icon.png',
            splashArt: '/images/characters/Beidou/splash.png',
            rarity: 4,
            rank: 73
        },
        {
            id: 'Keqing',
            name: '刻晴',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Sword'],
            type: typeMap['Electro'],
            icon: '/images/characters/Keqing/icon.png',
            splashArt: '/images/characters/Keqing/splash.png',
            rarity: 5,
            rank: 74
        },
        {
            id: 'Kaeya',
            name: 'ガイア',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Kaeya/icon.png',
            splashArt: '/images/characters/Kaeya/splash.png',
            rarity: 4,
            rank: 75
        },
        {
            id: 'Ningguang',
            name: '凝光',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Geo'],
            icon: '/images/characters/Ningguang/icon.png',
            splashArt: '/images/characters/Ningguang/splash.png',
            rarity: 4,
            rank: 76
        },
        {
            id: 'YaeMiko',
            name: '八重神子',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Electro'],
            icon: '/images/characters/YaeMiko/icon.png',
            splashArt: '/images/characters/YaeMiko/splash.png',
            rarity: 5,
            rank: 77
        },
        {
            id: 'Eula',
            name: 'エウルア',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Claymore'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Eula/icon.png',
            splashArt: '/images/characters/Eula/splash.png',
            rarity: 5,
            rank: 78
        },
        {
            id: 'Gorou',
            name: 'ゴロー',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Bow'],
            type: typeMap['Geo'],
            icon: '/images/characters/Gorou/icon.png',
            splashArt: '/images/characters/Gorou/splash.png',
            rarity: 4,
            rank: 79
        },
        {
            id: 'YunJin',
            name: '雲菫',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Polearm'],
            type: typeMap['Geo'],
            icon: '/images/characters/YunJin/icon.png',
            splashArt: '/images/characters/YunJin/splash.png',
            rarity: 4,
            rank: 80
        },
        {
            id: 'KujouSara',
            name: '九条裟羅',
            region: regionMap['InazumaCity'],
            weapon: weaponMap['Bow'],
            type: typeMap['Electro'],
            icon: '/images/characters/KujouSara/icon.png',
            splashArt: '/images/characters/KujouSara/splash.png',
            rarity: 4,
            rank: 81
        },
        {
            id: 'Lisa',
            name: 'リサ',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Catalyst'],
            type: typeMap['Electro'],
            icon: '/images/characters/Lisa/icon.png',
            splashArt: '/images/characters/Lisa/splash.png',
            rarity: 4,
            rank: 82
        },
        {
            id: 'Qiqi',
            name: '七七',
            region: regionMap['LiyueHarbor'],
            weapon: weaponMap['Sword'],
            type: typeMap['Cryo'],
            icon: '/images/characters/Qiqi/icon.png',
            splashArt: '/images/characters/Qiqi/splash.png',
            rarity: 5,
            rank: 83
        },
        {
            id: 'Traveler',
            name: '旅人',
            region: regionMap['Mondstadt'],
            weapon: weaponMap['Sword'],
            type: typeMap['Anemo'],
            icon: '/images/characters/Traveler/icon.png',
            splashArt: '/images/characters/Traveler/splash.png',
            rarity: 5,
            rank: 84
        },
    ]
;