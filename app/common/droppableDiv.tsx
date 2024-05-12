import {Character as GenshinCharacter} from "@/app/genshin/interfaces/character";
import {Character as HsrCharacter} from "@/app/hsr/interfaces/character";
import React from "react";
import {useDroppable} from "@dnd-kit/core";
import {isDummyCharacter} from "@/app/common/interfaces/baseCharacter";
import {CharacterBox} from "@/app/common/characterBox";

interface DroppableDivProps {
    character: GenshinCharacter | HsrCharacter;
    rank: number;
    handleCharacterClick: (characterId: string) => void;
}

export const DroppableDiv: React.FC<DroppableDivProps & { isPlaceholder: boolean }> =
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
                 className={`
                        relative flex items-center justify-center
                        w-22 spl:w-24 h-34 tb:w-28 tb:h-40 pc:w-32 pc:h-48
                        ${isDummyCharacter(character) ? 'bg-gray-500 bg-opacity-20' : 'bg-white bg-opacity-10'}
                        rounded-lg cursor-pointer`}
            >
                <CharacterBox character={character} rank={rank}/>
            </div>
        );
    };