"use client";
import {useEffect, useState} from 'react';
import {initialCharacters as initialGenshinCharacter} from '@/app/genshin/lists/characterList';
import {initialCharacters as initialHsrCharacter} from '@/app/hsr/lists/characterList';
import {RankResult} from './common/rankResult';
import {CharacterPool as GenshinCharacterPool} from './genshin/characterPool';
import {CharacterPool as HsrCharacterPool} from './hsr/characterPool';
import {
    Character as GenshinCharacter,
    createDummyCharacters as createGenshinCharacters
} from "@/app/genshin/interfaces/character";
import {Character as HsrCharacter, createDummyCharacters as createHsrCharacters} from "@/app/hsr/interfaces/character";
import {createDummyCharacter} from "@/app/common/interfaces/baseCharacter";

export default function CharacterRanking() {
    const prefix = process.env.NODE_ENV === 'production' ? '/genshin-char-grouping-tool' : '';

    const [viewType, setViewType] = useState<'genshin' | 'hsr'>('genshin');

    // 最初から空欄埋めた10キャラでランキングを作成
    const [rankedCharacters, setRankedCharacters] = useState<GenshinCharacter[] | HsrCharacter[]>(createGenshinCharacters(10));
    useEffect(() => {
        if (viewType === 'genshin') {
            setRankedCharacters(createGenshinCharacters(10));
        } else {
            setRankedCharacters(createHsrCharacters(10));
        }
    }, [viewType]);

    const handleCharacterClick = (characterId: string) => {
        const characterInRank = rankedCharacters.find(c => c.id === characterId);

        if (!characterInRank) {
            // キャラクターがランキングに存在しない場合
            const dummyIndex = rankedCharacters.findIndex(c => c.id.startsWith('dummy'));
            if (dummyIndex === -1 && rankedCharacters.length >= 10) {
                alert('ランキングには10人までしか追加できません');
                return;
            }

            const characterToAdd = viewType === 'genshin' ? initialGenshinCharacter.find(c => c.id === characterId) : initialHsrCharacter.find(c => c.id === characterId);

            if (characterToAdd) {
                setRankedCharacters((currentRanked: any) => {
                    const newRanked = [...currentRanked];
                    if (dummyIndex !== -1) {
                        newRanked[dummyIndex] = characterToAdd;
                    } else {
                        newRanked.push(characterToAdd);
                    }
                    return newRanked;
                });
            }
        } else {
            // キャラクターがランキングに存在する場合
            setRankedCharacters((currentRanked: any) => {
                const index = currentRanked.findIndex((c: { id: string; }) => c.id === characterId);
                const newRanked = [...currentRanked];
                if (viewType === 'genshin') {
                    newRanked[index] = createDummyCharacter('genshin') as GenshinCharacter;  // ダミーキャラクターに置き換え
                } else {
                    newRanked[index] = createDummyCharacter('hsr') as HsrCharacter;  // ダミーキャラクターに置き換え
                }
                return newRanked;
            });
        }
    };

    // 選択されたキャラクターのリストの全削除
    const clearRanking = () => {
        setRankedCharacters(viewType === 'genshin' ? createGenshinCharacters(10) : createHsrCharacters(10));
    };

    const backgroundUrl = viewType === 'genshin' ? prefix + '/images/genshin/utils/galaxy.png' : prefix + '/images/hsr/utils/galaxy.jpeg';
    // 1位のキャラクターのsplashArtを取得
    const rankingBackgroundUrl = rankedCharacters.length > 0 ? prefix + rankedCharacters[0].splashArt : '';

    return (
        <div className="
            flex flex-col
            justify-center
            p-2
            h-full
            w-full
            "
             style={{
                 backgroundImage: `url(${backgroundUrl})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
             }}>
            <div className="flex justify-center h-8 space-x-0.5">
                <button
                    className="bg-gray-500 bg-opacity-50 hover:bg-gray-700 w-24 h-6 transform -skew-x-24"
                    onClick={() => setViewType('genshin')}>
                    <span className="inline-block text-white text-sm transform skew-x-24">原神</span>
                </button>
                <button
                    className="bg-gray-500 bg-opacity-50 hover:bg-gray-700 w-24 h-6 transform -skew-x-24"
                    onClick={() => setViewType('hsr')}>
                    <span className="inline-block text-white text-sm transform skew-x-24">スターレイル</span>
                </button>
            </div>

            {viewType === 'genshin' ? (
                <GenshinCharacterPool characters={initialGenshinCharacter} rankedCharacters={rankedCharacters as GenshinCharacter[]}
                                 onCharacterClick={handleCharacterClick}/>
            ) : (
                <HsrCharacterPool characters={initialHsrCharacter} rankedCharacters={rankedCharacters as HsrCharacter[]}
                                 onCharacterClick={handleCharacterClick}/>
            )}
            <div className="pt-4 flex justify-center w-full">
                <input
                    type="text"
                    className="pb-1
                    bg-transparent border-b-2 border-white border-opacity-90
                    text-white text-opacity-90 text-center
                    text-md tb:text-lg pc:text-2xl
                    font-bold placeholder-gray-500 placeholder-opacity-80 focus:outline-none w-full spl:w-96"
                    placeholder="ランキングタイトル"
                    maxLength={30}/>
            </div>
            <div id="rankingResult"
                 className="pt-2 flex justify-center
                    max-h-rank-result tb:max-h-rank-result-tb pc:max-h-rank-result-pc"
                 style={{
                     minHeight: '600px',
                     width: '98vw',
                     backgroundImage: `url(${rankingBackgroundUrl})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'left 30% bottom 80%',
                     backgroundRepeat: 'no-repeat',
                 }}>
                <RankResult viewType={viewType} rankedCharacters={rankedCharacters} setRankedCharacters={setRankedCharacters}
                            handleCharacterClick={handleCharacterClick}/>
            </div>
            <div className="pt-4 w-full">
                <button onClick={clearRanking}
                        className="w-full bg-blue-300 bg-opacity-50 text-white text-opacity-90 text-center font-bold py-2 rounded-md">
                    ランキングをクリア
                </button>
            </div>
        </div>
    );
}

