import {Character} from "@/app/characterList";
import React from "react";
import {useDroppable} from "@dnd-kit/core";
import {CharacterBox} from "@/app/characterBox";

export const RankingRows: React.FC<{
    characters: Character[];
    placeholderIndex: number | null;
}> = ({characters, placeholderIndex}) => {
    return (
        <>
            <RankingRow characters={characters} start={0} end={1}
                        placeholderIndex={placeholderIndex}/>
            <RankingRow characters={characters} start={1} end={3}
                        placeholderIndex={placeholderIndex}/>
            <RankingRow characters={characters} start={3} end={6}
                        placeholderIndex={placeholderIndex}/>
            <RankingRow characters={characters} start={6} end={10}
                        placeholderIndex={placeholderIndex}/>
        </>
    );
};

interface RankingRowProps {
    characters: Character[];
    start: number;
    end: number;
    placeholderIndex: number | null;
}

const RankingRow: React.FC<RankingRowProps>
    = ({
           characters,
           start,
           end,
           placeholderIndex
       }) => {
    return (
        <div className="col-start-1 col-span-4 grid grid-cols-4 gap-2 w-full h-full">
            {characters.slice(start, end).map((character, index) => (
                <DroppableDiv key={character.id} character={character} rank={start + index + 1}
                              isPlaceholder={start + index === placeholderIndex}/>
            ))}
        </div>
    );
};

interface DroppableDivProps {
    character: Character;
    rank: number;
    moveCharacter?: (dragIndex: number, hoverIndex: number) => void;
}

const DroppableDiv: React.FC<DroppableDivProps & { isPlaceholder: boolean }> =
    ({
         character,
         rank,
         isPlaceholder
     }) => {
        const {isOver, setNodeRef} = useDroppable({
            id: character.id,
        });

        const style = {
            backgroundColor: isPlaceholder ? 'grey' : 'transparent',  // プレースホルダー背景色
            opacity: isPlaceholder ? 0.5 : 1,
        };

        return (
            <div ref={setNodeRef} style={style}>
                <CharacterBox character={character} rank={rank}/>
            </div>
        );
    };