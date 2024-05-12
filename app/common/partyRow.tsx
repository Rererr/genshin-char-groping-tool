import React, {useContext, useEffect, useState} from "react";
import {Character as GenshinCharacter} from "@/app/genshin/interfaces/character";
import {Character as HsrCharacter} from "@/app/hsr/interfaces/character";
import {isDummyCharacter} from "@/app/common/interfaces/baseCharacter";
import {DroppableDiv} from "@/app/common/droppableDiv";
import {GameTypeContext} from "@/app/common/contexts/GameTypeContext";
import SelectItemIcon from "@/app/common/icons/selectItemIcon";
import {initialTypes} from "@/app/genshin/lists/typeList";
import {Type} from "@/app/common/interfaces/type";

export const PartyRows: React.FC<{
    characters: GenshinCharacter[] | HsrCharacter[];
    placeholderIndex: number | null;
    handleCharacterClick: (characterId: string) => void;
}> = ({characters, placeholderIndex, handleCharacterClick}) => {
    return (
        <>
            <PartyRow characters={characters} start={0} end={4}
                      placeholderIndex={placeholderIndex}
                      handleCharacterClick={handleCharacterClick}/>
            <PartyRow characters={characters} start={4} end={8}
                      placeholderIndex={placeholderIndex}
                      handleCharacterClick={handleCharacterClick}/>
        </>
    );
};

interface PartyRowProps {
    characters: GenshinCharacter[] | HsrCharacter[];
    start: number;
    end: number;
    placeholderIndex: number | null;
    handleCharacterClick: (characterId: string) => void;
}

const PartyRow: React.FC<PartyRowProps>
    = ({
           characters,
           start,
           end,
           placeholderIndex,
           handleCharacterClick
       }) => {
    const rowCharacters = characters.slice(start, end);
    const gameType = useContext(GameTypeContext);
    const [partyHasAllTypes, setPartyHasAllTypes] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState<Type[]>([]);
    const [synergies, setSynergies] = useState<Type[]>([]);

    useEffect(() => {
        const typeCount = rowCharacters.reduce((acc, character) => {
            if (isDummyCharacter(character)) {
                return acc;
            }

            const typeId = character.type.id;
            acc[typeId] = (acc[typeId] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const newSynergies = initialTypes.filter(type => typeCount[type.id] >= 2);

        if (JSON.stringify(newSynergies.map(type => type.id)) !== JSON.stringify(synergies.map(type => type.id))) {
            setSynergies(newSynergies);
        }

        const newSelectedTypes = rowCharacters.map(character => character.type);
        if (JSON.stringify(newSelectedTypes.map(type => type.id)) !== JSON.stringify(selectedTypes.map(type => type.id))) {
            setSelectedTypes(newSelectedTypes);
        }

        const hasAllTypes = Object.keys(typeCount).length === 4;
        if (hasAllTypes !== partyHasAllTypes) {
            setPartyHasAllTypes(hasAllTypes);
        }
    }, [characters, start, end, synergies, selectedTypes, partyHasAllTypes]);

    return (
        <div className="mb-1 py-8 px-2 col-span-1 bg-gray-500 bg-opacity-50 rounded-2xl w-full">
            <div className="flex justify-start w-11/12">
                <input
                    type="text"
                    className="p-1
                    bg-transparent border-b-2 border-white border-opacity-90
                    text-white text-opacity-90 text-start
                    text-md tb:text-md pc:text-xl
                    font-bold placeholder-gray-500 placeholder-opacity-80 focus:outline-none
                    w-full spl:w-96
                    max-h-6"
                    placeholder="パーティ名"
                    maxLength={30}/>
            </div>
            <div className="p-1
                    justify-center
                    grid grid-cols-4 gap-4 tb:gap-6 pc:gap-6
                    h-36 tb:h-40 pc:h-48">
                {rowCharacters.map((character, index) => (
                    <DroppableDiv key={character.id} character={character} rank={start + index + 1}
                                  isPlaceholder={start + index === placeholderIndex}
                                  handleCharacterClick={handleCharacterClick}
                    />
                ))}
            </div>
            <div className="p-1 flex justify-start content-center w-11/12">
                {gameType === 'genshin' ? (
                    <>
                        <span className="content-center">元素共鳴</span>
                        {partyHasAllTypes ? (
                            <>
                                <div className="pl-4 w-28 h-8 content-center">
                                    <span className="w-full">交錯の護り -</span>
                                </div>
                                {selectedTypes.map(type => (
                                    <div className="pt-1 w-6 h-7 items-center" key={type.id}>
                                        <SelectItemIcon src={type.image} alt={type.name}/>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <span></span>
                        )}
                        {synergies.map(synergy => (
                            <div className="pl-2 w-10 h-8" key={synergy.id}>
                                <SelectItemIcon src={synergy.image} alt={synergy.name}/>
                            </div>
                        ))}
                    </>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    )
        ;
};
