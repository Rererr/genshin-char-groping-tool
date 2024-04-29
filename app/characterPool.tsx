import React, {useState} from 'react';
import {Character} from '@/app/characterList';
import {initialWeapons} from "@/app/weaponList";
import {initialTypes} from "@/app/typeList";
import CharacterIcon from "@/app/Icons/characterPoolIcon";
import RarityIcon from "@/app/Icons/rarityIcon";
import TypeIcon from "@/app/Icons/typeIcon";
import WeaponIcon from "@/app/Icons/weaponIcon";

interface CharacterPoolProps {
    characters: Character[];
    rankedCharacters: Character[];
    onCharacterClick: (characterId: string) => void;
}

export const CharacterPool = ({characters, rankedCharacters, onCharacterClick}: CharacterPoolProps) => {
    const [selectedWeapons, setSelectedWeapons] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filterRarity, setFilterRarity] = useState<number | null>(null);

    const toggleWeapon = (weaponId: string) => {
        const currentIndex = selectedWeapons.indexOf(weaponId);
        const newWeapons = [...selectedWeapons];

        if (currentIndex === -1) {
            newWeapons.push(weaponId);
        } else {
            newWeapons.splice(currentIndex, 1);
        }

        setSelectedWeapons(newWeapons);
    };

    const toggleType = (typeId: string) => {
        const currentIndex = selectedTypes.indexOf(typeId);
        const newTypes = [...selectedTypes];

        if (currentIndex === -1) {
            newTypes.push(typeId);
        } else {
            newTypes.splice(currentIndex, 1);
        }

        setSelectedTypes(newTypes);
    };

    const filteredCharacters = characters.filter(character => {
        return (selectedWeapons.length === 0 || selectedWeapons.includes(character.weapon.id)) &&
            (selectedTypes.length === 0 || selectedTypes.includes(character.type.id)) &&
            (filterRarity === null || character.rarity === filterRarity);
    });

    return (
        <div className="w-full">
            <div className="grid grid-rows-2 grid-cols-7 gap-2 w-full">
                {/* 運命選択肢 */}
                <div className="col-span-7 grid grid-cols-7 gap-2">
                    {initialWeapons.map(weapon => (
                        <button key={weapon.id} onClick={() => toggleWeapon(weapon.id)}
                                className={`w-full h-12 ${selectedWeapons.includes(weapon.id) ? 'bg-blue-500' : 'bg-gray-500'}`}>
                            <WeaponIcon src={weapon.image} alt={weapon.name}/>
                        </button>
                    ))}
                </div>
                <div className="col-span-7 grid grid-cols-7 gap-2">
                    {initialTypes.map(type => (
                        <button key={type.id} onClick={() => toggleType(type.id)}
                                className={`w-full h-12 ${selectedTypes.includes(type.id) ? 'bg-green-500' : 'bg-gray-200'}`}>
                            <TypeIcon src={type.image} alt={type.name}/>
                        </button>
                    ))}
                </div>
                {/* 星選択肢 */}
                <div className="col-span-7 grid grid-cols-7 gap-2">
                    <label className="col-span-2 flex items-center justify-center">
                        <input type="radio" value="" checked={filterRarity === null}
                               onChange={() => setFilterRarity(null)}/>
                        <p className="p-2">全て</p>
                    </label>
                    <label className="col-span-2 flex items-center justify-center">
                        <input type="radio" className="mr-1" value="5" checked={filterRarity === 5}
                               onChange={() => setFilterRarity(5)}/>
                        {Array.from({length: 5}, (_, index) => (
                            <div key={index}><RarityIcon/></div>
                        ))}
                    </label>
                    <label className="col-span-2 flex items-center justify-center">
                        <input type="radio" className="mr-1" value="4" checked={filterRarity === 4}
                               onChange={() => setFilterRarity(4)}/>
                        {Array.from({length: 4}, (_, index) => (
                            <div key={index}><RarityIcon/></div>
                        ))}
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-2 overflow-y-auto overflow-x-hidden max-h-72 w-full ">
                {filteredCharacters.map((character) => {
                    // ランクリストにキャラクターが存在するかチェック
                    const isRanked = rankedCharacters.some((rankedChar: {
                        id: string;
                    }) => rankedChar.id === character.id);
                    // 既にランクリストにあるキャラクターには特別なスタイルを適用
                    const characterClasses = `flex flex-col items-center cursor-pointer w-full ${character.rarity === 5 ? 'bg-rarity-5' : 'bg-rarity-4'} ${isRanked ? 'ranked-character' : ''}`;

                    return (
                        <div key={character.id} className={characterClasses}
                             style={{
                                 maxHeight: '5.5rem',
                                 borderTopRightRadius: '1rem'
                             }}
                             onClick={() => onCharacterClick(character.id)}>
                            <CharacterIcon src={character.icon} alt={character.name}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
