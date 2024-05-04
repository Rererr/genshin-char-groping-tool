import {Character} from "@/app/lists/characterList";
import React from "react";
import {useDroppable} from "@dnd-kit/core";
import {CharacterBox} from "@/app/characterBox";

export const RankingRows: React.FC<{
    characters: Character[];
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
    characters: Character[];
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
                    w-full spl:max-w-96 tb:max-w-screen-spl
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

interface DroppableDivProps {
    character: Character;
    rank: number;
    handleCharacterClick: (characterId: string) => void;
}

const DroppableDiv: React.FC<DroppableDivProps & { isPlaceholder: boolean }> =
    ({
         character,
         rank,
         isPlaceholder,
         handleCharacterClick
     }) => {
        const {isOver, setNodeRef} = useDroppable({
            id: character.id,
        });

        const style = {
            backgroundColor: isPlaceholder ? 'grey' : 'transparent',  // プレースホルダー背景色
            opacity: isPlaceholder ? 0.5 : 1,
        };

        return (
            <div ref={setNodeRef} style={style} onClick={() => handleCharacterClick(character.id)}
                 className="
                        relative flex items-center justify-center
                        w-22 spl:w-24 h-34 tb:w-28 tb:h-40 pc:w-32 pc:h-48
                        bg-white bg-opacity-10 rounded-lg cursor-pointer"
            >
                <CharacterBox character={character} rank={rank}/>
            </div>
        );
    };