import React from "react";
import {Character} from "@/app/lists/characterList";
import CharacterIcon from "@/app/Icons/characterPoolIcon";
import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";

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
             className="flex flex-col items-center cursor-pointer w-full bg-gray-200 bg-opacity-50"
             style={{
                 borderTopRightRadius: '0.5rem',
                 borderBottomLeftRadius: '0.5rem',
                 ...style,
             }}>
            <div className="text-lg font-bold">
                <p style={{
                    color: 'rgb(229 231 235)',
                    filter: 'invert(100%) grayscale(100%) contrast(100)',
                }}>{rankWithSuffix}</p>
            </div>
            <CharacterIcon src={character.icon} alt={character.name}/>
            <p className="text-xs font-bold"
               style={{
                   color: 'rgb(229 231 235)',
                   filter: 'invert(100%) grayscale(100%) contrast(100)',
               }}>{character.name}</p>
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
