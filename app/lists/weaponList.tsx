export interface Weapon {
    id: string;
    name: string;
    image: string;
}

export const initialWeapons: Weapon[] = [
    {id: 'Sword', name: '片手剣', image: '/images/weapons/sword.png'},
    {id: 'Claymore', name: '両手剣', image: '/images/weapons/claymore.png'},
    {id: 'Bow', name: '弓', image: '/images/weapons/bow.png'},
    {id: 'Catalyst', name: '法器', image: '/images/weapons/catalyst.png'},
    {id: 'Polearm', name: '長柄武器', image: '/images/weapons/polearm.png'},
]