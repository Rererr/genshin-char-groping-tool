import React, {useCallback, useContext, useEffect, useState} from 'react';
import {DndContext, MouseSensor, TouchSensor, useSensor} from "@dnd-kit/core";
import {Character as GenshinCharacter} from "@/app/genshin/interfaces/character";
import {Character as HsrCharacter} from "@/app/hsr/interfaces/character";
import {RankingRows} from "@/app/common/rankingRow";
import {GameTypeContext} from "@/app/common/contexts/GameTypeContext";

interface RankResultProps {
    rankedCharacters: GenshinCharacter[] | HsrCharacter[];
    setRankedCharacters: React.Dispatch<React.SetStateAction<GenshinCharacter[] | HsrCharacter[]>>;
    handleCharacterClick: (characterId: string) => void;
}

export const RankResult = ({
                               rankedCharacters,
                               setRankedCharacters,
                               handleCharacterClick
                           }: RankResultProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null);

    const gameType = useContext(GameTypeContext);

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
            delay: 30,  // 30ミリ秒のディレイを設定
            tolerance: 5, // ドラッグを開始する前に移動できるピクセル数
            distance: 5 // ドラッグを開始するための最小距離
        }
    };

    const mouseSensorOptions = {
        activationConstraint: {
            delay: 80, // 80ミリ秒のディレイを設定
            tolerance: 5, // ドラッグを開始する前に移動できるピクセル数
            distance: 5 // ドラッグを開始するための最小距離
        }
    }

    const sensors = [
        useSensor(TouchSensor, touchSensorOptions),
        useSensor(MouseSensor, mouseSensorOptions)
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
                if (gameType === 'genshin') {
                    let newCharacters: GenshinCharacter[];
                    newCharacters = Array.from(prevCharacters as GenshinCharacter[]);
                    const [removed] = newCharacters.splice(oldIndex, 1);
                    return newCharacters.toSpliced(newIndex, 0, removed);
                } else {
                    let newCharacters: HsrCharacter[];
                    newCharacters = Array.from(prevCharacters as HsrCharacter[]);
                    const [removed] = newCharacters.splice(oldIndex, 1);
                    return newCharacters.toSpliced(newIndex, 0, removed);
                }
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
                if (gameType === 'genshin') {
                    let newCharacters = Array.from(prevCharacters as GenshinCharacter[]);
                    const [removed] = newCharacters.splice(oldIndex, 1);
                    return newCharacters.toSpliced(newIndex, 0, removed);
                } else {
                    let newCharacters = Array.from(prevCharacters as HsrCharacter[]);
                    const [removed] = newCharacters.splice(oldIndex, 1);
                    return newCharacters.toSpliced(newIndex, 0, removed);
                }
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