import React from "react";
import {Character as GenshinCharacter} from "@/app/genshin/interfaces/character";
import {Character as HsrCharacter} from "@/app/hsr/interfaces/character";
import {DroppableDiv} from "@/app/common/droppableDiv";

export const RankingRows: React.FC<{
    characters: GenshinCharacter[] | HsrCharacter[];
    placeholderIndex: number | null;
    handleCharacterClick: (characterId: string) => void;
}> = ({characters, placeholderIndex, handleCharacterClick}) => {
    return (
        <>
            <RankingRow characters={characters} start={0} end={1}
                        placeholderIndex={placeholderIndex}
                        handleCharacterClick={handleCharacterClick}/>
            <RankingRow characters={characters} start={1} end={3}
                        placeholderIndex={placeholderIndex}
                        handleCharacterClick={handleCharacterClick}/>
            <RankingRow characters={characters} start={3} end={6}
                        placeholderIndex={placeholderIndex}
                        handleCharacterClick={handleCharacterClick}/>
            <RankingRow characters={characters} start={6} end={10}
                        placeholderIndex={placeholderIndex}
                        handleCharacterClick={handleCharacterClick}/>
        </>
    );
};

interface RankingRowProps {
    characters: GenshinCharacter[] | HsrCharacter[];
    start: number;
    end: number;
    placeholderIndex: number | null;
    handleCharacterClick: (characterId: string) => void;
}

const RankingRow: React.FC<RankingRowProps>
    = ({
           characters,
           start,
           end,
           placeholderIndex,
           handleCharacterClick
       }) => {
    return (
        <div className="
                    col-start-1 col-span-4
                    grid grid-cols-4 gap-2 tb:gap-3 pc:gap-6
                    spl:max-w-96 tb:max-w-screen-spl
                    h-36 tb:h-40 pc:h-48">
            {characters.slice(start, end).map((character, index) => (
                <DroppableDiv key={character.id} character={character} rank={start + index + 1}
                              isPlaceholder={start + index === placeholderIndex}
                              handleCharacterClick={handleCharacterClick}
                />
            ))}
        </div>
    );
};
