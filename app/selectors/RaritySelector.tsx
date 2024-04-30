import React from 'react';
import RarityIcon from "@/app/Icons/rarityIcon";

interface RaritySelectorProps {
    filterRarity: number | null;
    setFilterRarity: (rarity: number | null) => void;
}

const RaritySelector: React.FC<RaritySelectorProps> = ({ filterRarity, setFilterRarity }) => {
    return (
        <div className="col-span-7 grid grid-cols-7 gap-2">
            {/* 全ての選択 */}
            <label className="col-span-2 flex items-center justify-center">
                <input type="radio" value="" checked={filterRarity === null}
                       onChange={() => setFilterRarity(null)}/>
                <p className="p-2">全て</p>
            </label>
            {/* 星5 */}
            <label className="col-span-2 flex items-center justify-center">
                <input type="radio" className="mr-1" value="5" checked={filterRarity === 5}
                       onChange={() => setFilterRarity(5)}/>
                {Array.from({length: 5}, (_, index) => (
                    <div key={index}><RarityIcon/></div>
                ))}
            </label>
            {/* 星4 */}
            <label className="col-span-2 flex items-center justify-center">
                <input type="radio" className="mr-1" value="4" checked={filterRarity === 4}
                       onChange={() => setFilterRarity(4)}/>
                {Array.from({length: 4}, (_, index) => (
                    <div key={index}><RarityIcon/></div>
                ))}
            </label>
        </div>
    );
};

export default RaritySelector;
