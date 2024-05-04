"use client";
import {useState} from 'react';
import {Character, initialCharacters} from './lists/characterList';
import {RankResult} from './rankResult';
import {CharacterPool} from './characterPool';

export default function CharacterRanking() {
    const prefix = process.env.NODE_ENV === 'production' ? '/genshin-char-grouping-tool' : '';

    const [rankedCharacters, setRankedCharacters] = useState<Character[]>([]);

    const handleCharacterClick = (characterId: string) => {
        const characterInRank = rankedCharacters.find(c => c.id === characterId);

        // 10人以上はランクリストに追加できない
        if (rankedCharacters.length >= 10 && !characterInRank) {
            alert('ランキングには10人までしか追加できません');
            return;
        }

        if (characterInRank) {
            setRankedCharacters(currentRanked => currentRanked.filter(c => c.id !== characterId));
        } else {
            // プールからランクリストに追加、プールはそのまま
            const characterToAdd = initialCharacters.find(c => c.id === characterId);
            if (characterToAdd) {
                setRankedCharacters(currentRanked => [...currentRanked, characterToAdd]);
            }
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
            p-4
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
                    max-h-rank-result pc:max-h-rank-result-pc"
                 style={{
                     minHeight: '600px',
                     width: '92vw',
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

