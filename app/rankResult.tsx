import React, {useCallback, useEffect, useState} from 'react';
import {DndContext, PointerSensor, TouchSensor, useSensor} from "@dnd-kit/core";
import {Character} from "@/app/interfaces/character";
import {RankingRows} from "@/app/rankingRow";

interface RankResultProps {
    rankedCharacters: Character[];
    setRankedCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    handleCharacterClick: (characterId: string) => void;
}

export const RankResult = ({
                               rankedCharacters,
                               setRankedCharacters,
                               handleCharacterClick
                           }: RankResultProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null);

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

    const pointerSensorOptions = {
        activationConstraint: {
            delay: 25, // 25ミリ秒のディレイを設定
            tolerance: 5 // ドラッグを開始する前に移動できるピクセル数
        }
    };

    const touchSensorOptions = {
        activationConstraint: {
            delay: 10,  // 10ミリ秒のディレイを設定
            tolerance: 5 // ドラッグを開始する前に移動できるピクセル数
        }
    };

    const sensors = [
        useSensor(PointerSensor, pointerSensorOptions),
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
                setTimeout(() => {
                    setPlaceholderIndex(newIndex);
                    updatePlaceholder(oldIndex, newIndex);
                }, 0);
            }
        } else {
            // プレースホルダーが設定されているが、現在のイベントで有効でない場合は解除
            if (placeholderIndex !== null) {
                setTimeout(() => {
                    setPlaceholderIndex(null);
                }, 0);
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
            <div className="grid grid-rows-4 grid-cols-4 gap-4 place-items-start"
                 style={{
                     minHeight: '600px',
                     width: '95vw',
                 }}>
                <RankingRows characters={rankedCharacters} placeholderIndex={placeholderIndex}
                             handleCharacterClick={handleCharacterClick}/>
            </div>
        </DndContext>
    );
};