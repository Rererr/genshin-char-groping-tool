import React, {useCallback, useEffect, useState} from 'react';
import {DndContext, PointerSensor, TouchSensor, useSensor} from "@dnd-kit/core";
import {Character} from "@/app/characterList";
import {RankingRows} from "@/app/RankingRow";

interface RankResultProps {
    rankedCharacters: Character[];
    setRankedCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

export const RankResult = ({rankedCharacters, setRankedCharacters}: RankResultProps) => {
    const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    // スクロール禁止の関数をuseCallbackでメモ化
    const disableScroll = useCallback((event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }, []);

    useEffect(() => {
        if (isDragging) {
            // ドラッグ開始時にスクロール禁止
            document.addEventListener('touchmove', disableScroll, {passive: false});
        }

        return () => {
            // コンポーネントのクリーンアップ時にスクロール禁止を解除
            document.removeEventListener('touchmove', disableScroll);
        };
    }, [isDragging, disableScroll]);

    const touchSensorOptions = {
        activationConstraint: {
            delay: 250,  // 250ミリ秒のディレイを設定
            tolerance: 10 // ドラッグを開始する前に移動できるピクセル数
        }
    };

    const sensors = [
        useSensor(PointerSensor),
        useSensor(TouchSensor, touchSensorOptions)
    ];

    function handleDragStart(event: any) {
        setIsDragging(true);
    }

    function handleDragOver(event: any) {
        const {active, over} = event;
        if (over && active.id !== over.id) {
            const oldIndex = rankedCharacters.findIndex((item) => item.id === active.id);
            const newIndex = rankedCharacters.findIndex((item) => item.id === over.id);

            // 新しい位置が古い位置と異なる場合のみプレースホルダーを更新
            if (newIndex !== oldIndex && newIndex !== placeholderIndex) {
                setPlaceholderIndex(newIndex);
                updatePlaceholder(oldIndex, newIndex);
            }
        } else {
            // プレースホルダーが設定されているが、現在のイベントで有効でない場合は解除
            if (placeholderIndex !== null) {
                setPlaceholderIndex(null);
            }
        }
    }

    function updatePlaceholder(oldIndex: number, newIndex: number) {
        if (oldIndex !== newIndex) {
            setRankedCharacters(prevCharacters => {
                let newCharacters = Array.from(prevCharacters);
                const [removed] = newCharacters.splice(oldIndex, 1);
                return newCharacters.toSpliced(newIndex, 0, removed);
            });
        }
    }

    function handleDragEnd(event: any) {
        setIsDragging(false);

        const {active, over} = event;
        if (!over) return; // オーバーしている要素がない場合はここで終了
        // プレースホルダーが設定されている時には、DragOverの処理ですでに配列が更新されているため、ここでは何もしない
        if (placeholderIndex === null && over && active.id !== over.id) {
            const oldIndex = rankedCharacters.findIndex((item) => item.id == active.id);
            const newIndex = rankedCharacters.findIndex((item) => item.id == over.id);
            moveCharacter(oldIndex, newIndex);
        }
        setPlaceholderIndex(null); // プレースホルダーを隠す
    }

    function moveCharacter(oldIndex: number, newIndex: number) {
        if (oldIndex !== newIndex) { // 位置が変更されているか確認
            console.log(oldIndex, newIndex)
            setRankedCharacters(prevCharacters => {
                let newCharacters = Array.from(prevCharacters);
                const [removed] = newCharacters.splice(oldIndex, 1);
                return newCharacters.toSpliced(newIndex, 0, removed);
            });
        }
    }

    return (
        <DndContext sensors={sensors}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}>
            <div className="grid grid-cols-4 gap-4 place-items-start min-h-80 w-full h-full">
                <RankingRows characters={rankedCharacters} placeholderIndex={placeholderIndex}/>
            </div>
        </DndContext>
    );
};