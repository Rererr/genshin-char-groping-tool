import React from "react";
import CharacterIcon from "@/app/Icons/characterIcon";
import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import {Character, isDummyCharacter} from "@/app/interfaces/character";

interface CharacterBoxProps {
    character: Character;
    rank: number;
}

export function CharacterBox(props: CharacterBoxProps) {
    const {character, rank} = props;
    const rankWithSuffix = getOrdinalSuffix(rank); // 順位にサフィックスを付加

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
             ${isDummyCharacter(character) ? 'bg-gray-400 bg-opacity-15' : 'bg-gray-200 bg-opacity-50'}
             `}
             style={{...style}}>
            <div className="text-lg font-bold">
                <p className={`
                        text-gray-200 contrast-100 grayscale invert
                        ${isDummyCharacter(character) ? 'text-opacity-0' : 'text-opacity-100'}
                    `}>{rankWithSuffix}</p>
            </div>
            {isDummyCharacter(character) ? '' : <CharacterIcon src={character.icon} alt={character.name}/>}
            <p className="text-xs tb:text-sm pc:text-lg font-bold text-gray-200 contrast-100 grayscale invert">{character.name}</p>
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