import React, {useState} from 'react';
import {initialWeapons} from "@/app/genshin/lists/weaponList";
import {initialTypes} from "@/app/genshin/lists/typeList";
import CharacterIcon from "@/app/common/icons/characterIcon";
import RaritySelector from "@/app/common/selectors/RaritySelector";
import ItemSelector from "@/app/common/selectors/ItemSelector";
import {initialRegions} from "@/app/genshin/lists/regionList";
import SelectItemIcon from "@/app/common/icons/selectItemIcon";
import {Character} from "@/app/genshin/interfaces/character";

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
        <div className="w-full min-w-96">
            <div className="pr-2
                grid
                grid-rows-3 tb:grid-rows-3 pc:grid-rows-2
                grid-cols-7 tb:grid-cols-10 pc:grid-cols-17
                gap-2 spl:gap-2 tb:gap-6 pc:gap-4
                bg-opacity-50
                w-96 spl:w-full spl:max-w-screen-spl tb:w-11/12 tb:max-w-screen-tb pc:w-full pc:max-w-screen-pc
             ">
                {/* 地域選択 */}
                <ItemSelector items={initialRegions} selectedItems={selectedRegions} toggleItem={toggleRegion}
                              selectedClassName="bg-blue-500 bg-opacity-50" defaultClassName="bg-gray-500 bg-opacity-50"
                              additionalClassName={"grid-cols-7 spl:grid-cols-5 col-span-7 spl:col-span-5"}
                              IconComponent={SelectItemIcon}/>
                {/* 武器選択肢 */}
                <ItemSelector items={initialWeapons} selectedItems={selectedWeapons} toggleItem={toggleWeapon}
                              selectedClassName="bg-blue-500 bg-opacity-50" defaultClassName="bg-gray-500 bg-opacity-50"
                              additionalClassName={"grid-cols-7 spl:grid-cols-5 col-span-7 spl:col-span-5"}
                              IconComponent={SelectItemIcon}/>
                {/* タイプ選択肢 */}
                <ItemSelector items={initialTypes} selectedItems={selectedTypes} toggleItem={toggleType}
                              selectedClassName="bg-blue-500 bg-opacity-50" defaultClassName="bg-gray-500 bg-opacity-50"
                              additionalClassName={"grid-cols-7 col-span-7"}
                              IconComponent={SelectItemIcon}/>
                {/* 星選択肢 */}
                <RaritySelector viewType={'genshin'} filterRarity={filterRarity} setFilterRarity={setFilterRarity}/>
            </div>

            <div className="
                    grid
                    grid-cols-4 spl:grid-cols-5 tb:grid-cols-9 pc:grid-cols-12
                    gap-2
                    overflow-y-auto
                    overflow-x-hidden
                    max-h-72
                    w-96 spl:w-full spl:max-w-screen-spl tb:w-11/12 tb:max-w-screen-tb pc:w-full pc:max-w-screen-pc
                    pr-2
                ">
                {filteredCharacters.map((character) => {
                    // ランクリストにキャラクターが存在するかチェック
                    const isRanked = rankedCharacters.some((rankedChar: {
                        id: string;
                    }) => rankedChar.id === character.id);
                    // 既にランクリストにあるキャラクターには特別なスタイル(.ranked-characters)を適用
                    const characterClasses = `flex flex-col items-center cursor-pointer w-full ${character.rarity === 5 ? 'bg-rarity-5' : 'bg-rarity-4'} ${isRanked ? 'ranked-character' : ''}`;

                    return (
                        <div key={character.id}
                             className={`${characterClasses}
                                            w-20 h-24 tb:w-24 tb:h-26 tb:max-h-26
                                        `}
                             style={{
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
