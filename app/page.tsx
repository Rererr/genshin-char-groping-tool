"use client";
import {useState} from 'react';
import {initialCharacters} from './lists/characterList';
import {RankResult} from './rankResult';
import {CharacterPool} from './characterPool';
import {Character, createDummyCharacter, createDummyCharacters} from "@/app/interfaces/character";

export default function CharacterRanking() {
    const prefix = process.env.NODE_ENV === 'production' ? '/genshin-char-grouping-tool' : '';

    // 最初から空欄埋めた10キャラでランキングを作成
    const [rankedCharacters, setRankedCharacters] = useState<Character[]>(createDummyCharacters(10));

    const handleCharacterClick = (characterId: string) => {
        const characterInRank = rankedCharacters.find(c => c.id === characterId);

        if (!characterInRank) {
            // キャラクターがランキングに存在しない場合
            const dummyIndex = rankedCharacters.findIndex(c => c.id.startsWith('dummy'));
            if (dummyIndex === -1 && rankedCharacters.length >= 10) {
                alert('ランキングには10人までしか追加できません');
                return;
            }

            const characterToAdd = initialCharacters.find(c => c.id === characterId);
            if (characterToAdd) {
                setRankedCharacters(currentRanked => {
                    const newRanked = [...currentRanked];
                    if (dummyIndex !== -1) {
                        newRanked[dummyIndex] = characterToAdd;  // ダミーの位置に追加
                    } else {
                        newRanked.push(characterToAdd);  // リストの末尾に追加
                    }
                    return newRanked;
                });
            }
        } else {
            // キャラクターがランキングに存在する場合
            setRankedCharacters(currentRanked => {
                const index = currentRanked.findIndex(c => c.id === characterId);
                const newRanked = [...currentRanked];
                newRanked[index] = createDummyCharacter();  // その位置に新しいダミーキャラクターを挿入
                return newRanked;
            });
        }
    };

    // 選択されたキャラクターのリストの全削除
    const clearRanking = () => {
        setRankedCharacters([]);
    };

    // 1位のキャラクターのsplashArtを取得
    const backgroundUrl = rankedCharacters.length > 0 ? prefix + rankedCharacters[0].splashArt : '';

    return (
        <div className="
            flex flex-col
            justify-center
            p-2
            h-full
            w-full
            "
             style={{
                 backgroundImage: `url(${prefix + '/images/utils/galaxy.png'})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
             }}>
            <CharacterPool characters={initialCharacters} rankedCharacters={rankedCharacters}
                           onCharacterClick={handleCharacterClick}/>
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
                     backgroundImage: `url(${backgroundUrl})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'left 30% bottom 80%',
                     backgroundRepeat: 'no-repeat',
                 }}>
                <RankResult rankedCharacters={rankedCharacters} setRankedCharacters={setRankedCharacters}
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

