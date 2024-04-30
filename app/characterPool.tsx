import React, {useState} from 'react';
import {Character} from '@/app/lists/characterList';
import {initialWeapons} from "@/app/lists/weaponList";
import {initialTypes} from "@/app/lists/typeList";
import CharacterIcon from "@/app/Icons/characterPoolIcon";
import RaritySelector from "@/app/selectors/RaritySelector";
import ItemSelector from "@/app/selectors/ItemSelector";
import {initialRegions} from "@/app/lists/regionList";
import SelectItemIcon from "@/app/Icons/selectItemIcon";

interface CharacterPoolProps {
    characters: Character[];
    rankedCharacters: Character[];
    onCharacterClick: (characterId: string) => void;
}

export const CharacterPool = ({characters, rankedCharacters, onCharacterClick}: CharacterPoolProps) => {
    const [selectedWeapons, setSelectedWeapons] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [filterRarity, setFilterRarity] = useState<number | null>(null);

    const toggleSelection = (currentSelection: string[], setSelection: React.Dispatch<React.SetStateAction<string[]>>) => (itemId: string) => {
        const currentIndex = currentSelection.indexOf(itemId);
        const newSelection = [...currentSelection];

        if (currentIndex === -1) {
            newSelection.push(itemId);
        } else {
            newSelection.splice(currentIndex, 1);
        }

        setSelection(newSelection);
    };

    const toggleRegion = toggleSelection(selectedRegions, setSelectedRegions);
    const toggleWeapon = toggleSelection(selectedWeapons, setSelectedWeapons);
    const toggleType = toggleSelection(selectedTypes, setSelectedTypes);

    const filteredCharacters = characters.filter(character => {
        return (selectedWeapons.length === 0 || selectedWeapons.includes(character.weapon.id)) &&
            (selectedTypes.length === 0 || selectedTypes.includes(character.type.id)) &&
            (selectedRegions.length === 0 || selectedRegions.includes(character.region.id)) &&
            (filterRarity === null || character.rarity === filterRarity);
    });

    return (
        <div className="w-full">
            <div className="grid grid-rows-2 grid-cols-7 gap-2 w-full bg-opacity-50">
                {/* 地域選択 */}
                <ItemSelector items={initialRegions} selectedItems={selectedRegions} toggleItem={toggleRegion}
                              selectedClassName="bg-blue-500 bg-opacity-50" defaultClassName="bg-gray-500 bg-opacity-50"
                              IconComponent={SelectItemIcon}/>
                {/* 武器選択肢 */}
                <ItemSelector items={initialWeapons} selectedItems={selectedWeapons} toggleItem={toggleWeapon}
                              selectedClassName="bg-blue-500 bg-opacity-50" defaultClassName="bg-gray-500 bg-opacity-50"
                              IconComponent={SelectItemIcon}/>
                {/* タイプ選択肢 */}
                <ItemSelector items={initialTypes} selectedItems={selectedTypes} toggleItem={toggleType}
                              selectedClassName="bg-blue-500 bg-opacity-50" defaultClassName="bg-gray-500 bg-opacity-50"
                              IconComponent={SelectItemIcon}/>
                {/* 星選択肢 */}
                <RaritySelector filterRarity={filterRarity} setFilterRarity={setFilterRarity}/>
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
