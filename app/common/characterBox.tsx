import React, {useContext} from "react";
import CharacterIcon from "@/app/common/icons/characterIcon";
import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import {Character as GenshinCharacter} from "@/app/genshin/interfaces/character";
import {Character as HsrCharacter} from "@/app/hsr/interfaces/character";
import {isDummyCharacter} from "@/app/common/interfaces/baseCharacter";
import {ToolTypeContext} from "@/app/common/contexts/ToolTypeContext";

interface CharacterBoxProps {
    character: GenshinCharacter | HsrCharacter;
    rank: number;
}

export function CharacterBox(props: CharacterBoxProps) {
    const {character, rank} = props;
    const rankWithSuffix = getOrdinalSuffix(rank); // 順位にサフィックスを付加

    const toolType = useContext(ToolTypeContext);

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: character.id,
    });
    const style = transform ? {
        transform: CSS.Transform.toString(transform),
    } : undefined;

    return (
        <div ref={setNodeRef} {...listeners} {...attributes}
             className={`
             flex flex-col items-center cursor-pointer
             w-full h-full rounded-tr-lg rounded-bl-lg
             ${toolType === 'ranking' ?
                 isDummyCharacter(character) ? 'bg-gray-400 bg-opacity-15' : 'bg-gray-200 bg-opacity-50'
                 : 'pt-2'}
             `}
             style={{...style}}>
            {toolType === 'ranking' ? (
                <div className="text-lg font-bold">
                    <p className={`
                        text-gray-200 contrast-100 grayscale invert
                        ${isDummyCharacter(character) ? 'text-opacity-0' : 'text-opacity-100'}
                    `}>{rankWithSuffix}</p>
                </div>
            ) : (<> </>)}
            {isDummyCharacter(character) ? '' : <CharacterIcon src={character.icon} alt={character.name}/>}
            <p className={`pt-1 text-sm tb:text-lg pc:text-xl text-nowrap ` +
                (toolType === 'ranking' ? 'text-gray-100 contrast-90 grayscale invert' : 'text-white contrast-20 grayscale')
            }>
                {character.name}
            </p>

        </div>
    );
}

function getOrdinalSuffix(i: number): string {
    const j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}