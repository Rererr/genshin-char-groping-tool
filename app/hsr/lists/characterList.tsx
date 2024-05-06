import {Character} from "@/app/hsr/interfaces/character";
import {Destiny} from "@/app/hsr/interfaces/destiny";
import {initialTypes} from "@/app/hsr/lists/typeList";
import {initialDestinies} from "@/app/hsr/lists/destinyList";
import {Type} from "@/app/common/interfaces/type";

const destinyMap: Record<string, Destiny> = initialDestinies.reduce((map, destiny) => {
    map[destiny.id] = destiny;
    return map;
}, {} as Record<string, Destiny>);

const typeMap: Record<string, Type> = initialTypes.reduce((map: Record<string, Type>, type) => {
    map[type.id] = type;
    return map;
}, {} as Record<string, Type>);


export const initialCharacters: Character[] = [
    {
        id: 'Acheron',
        name: '黄泉',
        destiny: destinyMap['Nihility'],
        type: typeMap['Lightning'],
        icon: '/images/hsr/characters/Acheron/icon.png',
        splashArt: '/images/hsr/characters/Acheron/splash.png',
        rarity: 5,
        rank: 1
    },
    {
        id: 'Argenti',
        name: 'アルジェンティ',
        destiny: destinyMap['Erudition'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/Argenti/icon.png',
        splashArt: '/images/hsr/characters/Argenti/splash.png',
        rarity: 5,
        rank: 2
    },
    {
        id: 'Arlan',
        name: 'アーラン',
        destiny: destinyMap['Destruction'],
        type: typeMap['Lightning'],
        icon: '/images/hsr/characters/Arlan/icon.png',
        splashArt: '/images/hsr/characters/Arlan/splash.png',
        rarity: 4,
        rank: 3
    },
    {
        id: 'Asta',
        name: 'アスター',
        destiny: destinyMap['Harmony'],
        type: typeMap['Fire'],
        icon: '/images/hsr/characters/Asta/icon.png',
        splashArt: '/images/hsr/characters/Asta/splash.png',
        rarity: 4,
        rank: 4
    },
    {
        id: 'Aventurine',
        name: 'アベンチュリン',
        destiny: destinyMap['Preservation'],
        type: typeMap['Imaginary'],
        icon: '/images/hsr/characters/Aventurine/icon.png',
        splashArt: '/images/hsr/characters/Aventurine/splash.png',
        rarity: 5,
        rank: 5
    },
    {
        id: 'Bailu',
        name: '白露',
        destiny: destinyMap['Abundance'],
        type: typeMap['Lightning'],
        icon: '/images/hsr/characters/Bailu/icon.png',
        splashArt: '/images/hsr/characters/Bailu/splash.png',
        rarity: 5,
        rank: 6
    },
    {
        id: 'BlackSwan',
        name: 'ブラックスワン',
        destiny: destinyMap['Nihility'],
        type: typeMap['Wind'],
        icon: '/images/hsr/characters/BlackSwan/icon.png',
        splashArt: '/images/hsr/characters/BlackSwan/splash.png',
        rarity: 5,
        rank: 7
    },
    {
        id: 'Blade',
        name: '刃',
        destiny: destinyMap['Destruction'],
        type: typeMap['Wind'],
        icon: '/images/hsr/characters/Blade/icon.png',
        splashArt: '/images/hsr/characters/Blade/splash.png',
        rarity: 5,
        rank: 8
    },
    {
        id: 'boothill',
        name: 'ブートヒル',
        destiny: destinyMap['Hunt'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/Boothill/icon.png',
        splashArt: '/images/hsr/characters/Boothill/splash.png',
        rarity: 5,
        rank: 9
    },
    {
        id: 'Bronya',
        name: 'ブローニャ',
        destiny: destinyMap['Harmony'],
        type: typeMap['Wind'],
        icon: '/images/hsr/characters/Bronya/icon.png',
        splashArt: '/images/hsr/characters/Bronya/splash.png',
        rarity: 5,
        rank: 10
    },
    {
        id: 'Clara',
        name: 'クラーラ',
        destiny: destinyMap['Destruction'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/Clara/icon.png',
        splashArt: '/images/hsr/characters/Clara/splash.png',
        rarity: 5,
        rank: 11
    },
    {
        id: 'DanHeng',
        name: '丹恒',
        destiny: destinyMap['Hunt'],
        type: typeMap['Wind'],
        icon: '/images/hsr/characters/DanHeng/icon.png',
        splashArt: '/images/hsr/characters/DanHeng/splash.png',
        rarity: 4,
        rank: 12
    },
    {
        id: 'Firefly',
        name: 'ホタル',
        destiny: destinyMap['Destruction'],
        type: typeMap['Fire'],
        icon: '/images/hsr/characters/Firefly/icon.png',
        splashArt: '/images/hsr/characters/Firefly/splash.png',
        rarity: 5,
        rank: 13
    },
    {
        id: 'FuXuan',
        name: '符玄',
        destiny: destinyMap['Preservation'],
        type: typeMap['Quantum'],
        icon: '/images/hsr/characters/FuXuan/icon.png',
        splashArt: '/images/hsr/characters/FuXuan/splash.png',
        rarity: 5,
        rank: 14
    },
    {
        id: 'Gallagher',
        name: 'ギャラガー',
        destiny: destinyMap['Abundance'],
        type: typeMap['Fire'],
        icon: '/images/hsr/characters/Gallagher/icon.png',
        splashArt: '/images/hsr/characters/Gallagher/splash.png',
        rarity: 4,
        rank: 15
    },
    {
        id: 'Gepard',
        name: 'ジェパード',
        destiny: destinyMap['Preservation'],
        type: typeMap['Ice'],
        icon: '/images/hsr/characters/Gepard/icon.png',
        splashArt: '/images/hsr/characters/Gepard/splash.png',
        rarity: 5,
        rank: 16
    },
    {
        id: 'Guinaifen',
        name: '桂乃芬',
        destiny: destinyMap['Nihility'],
        type: typeMap['Fire'],
        icon: '/images/hsr/characters/Guinaifen/icon.png',
        splashArt: '/images/hsr/characters/Guinaifen/splash.png',
        rarity: 4,
        rank: 17
    },
    {
        id: 'Hanya',
        name: '寒鴉',
        destiny: destinyMap['Harmony'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/Hanya/icon.png',
        splashArt: '/images/hsr/characters/Hanya/splash.png',
        rarity: 4,
        rank: 18
    },
    {
        id: 'Herta',
        name: 'ヘルタ',
        destiny: destinyMap['Erudition'],
        type: typeMap['Ice'],
        icon: '/images/hsr/characters/Herta/icon.png',
        splashArt: '/images/hsr/characters/Herta/splash.png',
        rarity: 4,
        rank: 19
    },
    {
        id: 'Himeko',
        name: '姫子',
        destiny: destinyMap['Erudition'],
        type: typeMap['Fire'],
        icon: '/images/hsr/characters/Himeko/icon.png',
        splashArt: '/images/hsr/characters/Himeko/splash.png',
        rarity: 5,
        rank: 20
    },
    {
        id: 'Hook',
        name: 'フック',
        destiny: destinyMap['Destruction'],
        type: typeMap['Fire'],
        icon: '/images/hsr/characters/Hook/icon.png',
        splashArt: '/images/hsr/characters/Hook/splash.png',
        rarity: 4,
        rank: 21
    },
    {
        id: 'Huohuo',
        name: 'フォフォ',
        destiny: destinyMap['Abundance'],
        type: typeMap['Wind'],
        icon: '/images/hsr/characters/Huohuo/icon.png',
        splashArt: '/images/hsr/characters/Huohuo/splash.png',
        rarity: 5,
        rank: 22
    },
    {
        id: 'ImbibitorLunae',
        name: '飲月',
        destiny: destinyMap['Destruction'],
        type: typeMap['Imaginary'],
        icon: '/images/hsr/characters/ImbibitorLunae/icon.png',
        splashArt: '/images/hsr/characters/ImbibitorLunae/splash.png',
        rarity: 5,
        rank: 23
    },
    {
        id: 'Jingliu',
        name: '鏡流',
        destiny: destinyMap['Destruction'],
        type: typeMap['Ice'],
        icon: '/images/hsr/characters/Jingliu/icon.png',
        splashArt: '/images/hsr/characters/Jingliu/splash.png',
        rarity: 5,
        rank: 24
    },
    {
        id: 'JingYuan',
        name: '景元',
        destiny: destinyMap['Erudition'],
        type: typeMap['Lightning'],
        icon: '/images/hsr/characters/JingYuan/icon.png',
        splashArt: '/images/hsr/characters/JingYuan/splash.png',
        rarity: 5,
        rank: 25
    },
    {
        id: 'Kafka',
        name: 'カフカ',
        destiny: destinyMap['Nihility'],
        type: typeMap['Lightning'],
        icon: '/images/hsr/characters/Kafka/icon.png',
        splashArt: '/images/hsr/characters/Kafka/splash.png',
        rarity: 5,
        rank: 26
    },
    {
        id: 'Luka',
        name: 'ルカ',
        destiny: destinyMap['Nihility'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/Luka/icon.png',
        splashArt: '/images/hsr/characters/Luka/splash.png',
        rarity: 4,
        rank: 27
    },
    {
        id: 'Luocha',
        name: '羅刹',
        destiny: destinyMap['Abundance'],
        type: typeMap['Imaginary'],
        icon: '/images/hsr/characters/Luocha/icon.png',
        splashArt: '/images/hsr/characters/Luocha/splash.png',
        rarity: 5,
        rank: 28
    },
    {
        id: 'Lynx',
        name: 'リンクス',
        destiny: destinyMap['Abundance'],
        type: typeMap['Quantum'],
        icon: '/images/hsr/characters/Lynx/icon.png',
        splashArt: '/images/hsr/characters/Lynx/splash.png',
        rarity: 4,
        rank: 29
    },
    {
        id: 'March7th',
        name: '三月なのか',
        destiny: destinyMap['Preservation'],
        type: typeMap['Ice'],
        icon: '/images/hsr/characters/March7th/icon.png',
        splashArt: '/images/hsr/characters/March7th/splash.png',
        rarity: 4,
        rank: 30
    },
    {
        id: 'Misha',
        name: 'ミーシャ',
        destiny: destinyMap['Destruction'],
        type: typeMap['Ice'],
        icon: '/images/hsr/characters/Misha/icon.png',
        splashArt: '/images/hsr/characters/Misha/splash.png',
        rarity: 4,
        rank: 31
    },
    {
        id: 'Natasha',
        name: 'ナターシャ',
        destiny: destinyMap['Abundance'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/Natasha/icon.png',
        splashArt: '/images/hsr/characters/Natasha/splash.png',
        rarity: 4,
        rank: 32
    },
    {
        id: 'Pela',
        name: 'ペラ',
        destiny: destinyMap['Nihility'],
        type: typeMap['Ice'],
        icon: '/images/hsr/characters/Pela/icon.png',
        splashArt: '/images/hsr/characters/Pela/splash.png',
        rarity: 4,
        rank: 33
    },
    {
        id: 'Qingque',
        name: '青雀',
        destiny: destinyMap['Erudition'],
        type: typeMap['Quantum'],
        icon: '/images/hsr/characters/Qingque/icon.png',
        splashArt: '/images/hsr/characters/Qingque/splash.png',
        rarity: 4,
        rank: 34
    },
    {
        id: 'Ratio',
        name: 'Dr.レイシオ',
        destiny: destinyMap['Hunt'],
        type: typeMap['Imaginary'],
        icon: '/images/hsr/characters/Ratio/icon.png',
        splashArt: '/images/hsr/characters/Ratio/splash.png',
        rarity: 5,
        rank: 35
    },
    {
        id: 'Robin',
        name: 'ロビン',
        destiny: destinyMap['Harmony'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/Robin/icon.png',
        splashArt: '/images/hsr/characters/Robin/splash.png',
        rarity: 5,
        rank: 36
    },
    {
        id: 'RuanMei',
        name: 'ルアン・メェイ',
        destiny: destinyMap['Harmony'],
        type: typeMap['Ice'],
        icon: '/images/hsr/characters/RuanMei/icon.png',
        splashArt: '/images/hsr/characters/RuanMei/splash.png',
        rarity: 5,
        rank: 37
    },
    {
        id: 'Sampo',
        name: 'サンポ',
        destiny: destinyMap['Nihility'],
        type: typeMap['Wind'],
        icon: '/images/hsr/characters/Sampo/icon.png',
        splashArt: '/images/hsr/characters/Sampo/splash.png',
        rarity: 4,
        rank: 38
    },
    {
        id: 'Seele',
        name: 'ゼーレ',
        destiny: destinyMap['Hunt'],
        type: typeMap['Quantum'],
        icon: '/images/hsr/characters/Seele/icon.png',
        splashArt: '/images/hsr/characters/Seele/splash.png',
        rarity: 5,
        rank: 39
    },
    {
        id: 'Serval',
        name: 'セーバル',
        destiny: destinyMap['Erudition'],
        type: typeMap['Lightning'],
        icon: '/images/hsr/characters/Serval/icon.png',
        splashArt: '/images/hsr/characters/Serval/splash.png',
        rarity: 4,
        rank: 40
    },
    {
        id: 'SilverWolf',
        name: '銀狼',
        destiny: destinyMap['Nihility'],
        type: typeMap['Quantum'],
        icon: '/images/hsr/characters/SilverWolf/icon.png',
        splashArt: '/images/hsr/characters/SilverWolf/splash.png',
        rarity: 5,
        rank: 41
    },
    {
        id: 'Sparkle',
        name: '花火',
        destiny: destinyMap['Harmony'],
        type: typeMap['Quantum'],
        icon: '/images/hsr/characters/Sparkle/icon.png',
        splashArt: '/images/hsr/characters/Sparkle/splash.png',
        rarity: 5,
        rank: 42
    },
    {
        id: 'Sushang',
        name: '素裳',
        destiny: destinyMap['Hunt'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/Sushang/icon.png',
        splashArt: '/images/hsr/characters/Sushang/splash.png',
        rarity: 4,
        rank: 43
    },
    {
        id: 'Tingyun',
        name: '停雲',
        destiny: destinyMap['Harmony'],
        type: typeMap['Lightning'],
        icon: '/images/hsr/characters/Tingyun/icon.png',
        splashArt: '/images/hsr/characters/Tingyun/splash.png',
        rarity: 4,
        rank: 44
    },
    {
        id: 'Topaz',
        name: 'トパーズ',
        destiny: destinyMap['Hunt'],
        type: typeMap['Fire'],
        icon: '/images/hsr/characters/Topaz/icon.png',
        splashArt: '/images/hsr/characters/Topaz/splash.png',
        rarity: 5,
        rank: 45
    },
    {
        id: 'TrailblazerDestruction',
        name: '開拓者(壊滅)',
        destiny: destinyMap['Destruction'],
        type: typeMap['Physical'],
        icon: '/images/hsr/characters/TrailblazerDestruction/icon.gif',
        splashArt: '/images/hsr/characters/TrailblazerDestruction/splash.gif',
        rarity: 5,
        rank: 46
    },
    {
        id: 'TrailblazerPreservation',
        name: '開拓者(存護)',
        destiny: destinyMap['Preservation'],
        type: typeMap['Fire'],
        icon: '/images/hsr/characters/TrailblazerPreservation/icon.gif',
        splashArt: '/images/hsr/characters/TrailblazerPreservation/splash.gif',
        rarity: 5,
        rank: 47
    },
    {
        id: 'Welt',
        name: 'ヴェルト・ヨウ',
        destiny: destinyMap['Nihility'],
        type: typeMap['Imaginary'],
        icon: '/images/hsr/characters/Welt/icon.png',
        splashArt: '/images/hsr/characters/Welt/splash.png',
        rarity: 5,
        rank: 48
    },
    {
        id: 'Xueyi',
        name: '雪衣',
        destiny: destinyMap['Destruction'],
        type: typeMap['Quantum'],
        icon: '/images/hsr/characters/Xueyi/icon.png',
        splashArt: '/images/hsr/characters/Xueyi/splash.png',
        rarity: 4,
        rank: 49
    },
    {
        id: 'Yanqing',
        name: '彦卿',
        destiny: destinyMap['Hunt'],
        type: typeMap['Ice'],
        icon: '/images/hsr/characters/Yanqing/icon.png',
        splashArt: '/images/hsr/characters/Yanqing/splash.png',
        rarity: 5,
        rank: 50
    },
    {
        id: 'Yukong',
        name: '御空',
        destiny: destinyMap['Harmony'],
        type: typeMap['Imaginary'],
        icon: '/images/hsr/characters/Yukong/icon.png',
        splashArt: '/images/hsr/characters/Yukong/splash.png',
        rarity: 4,
        rank: 51
    },
];