import React from 'react';

interface ItemSelectorProps {
    items: Array<{ id: string; image: string; name: string }>;
    selectedItems: Array<string>;
    toggleItem: (id: string) => void;
    selectedClassName: string;
    defaultClassName: string;
    IconComponent: React.ComponentType<{ src: string; alt: string }>;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({ items, selectedItems, toggleItem, selectedClassName, defaultClassName, IconComponent }) => {
    return (
        <div className="col-span-7 grid grid-cols-7 gap-2">
            {items.map(item => (
                <button key={item.id} onClick={() => toggleItem(item.id)}
                        className={`w-full h-12 ${selectedItems.includes(item.id) ? selectedClassName : defaultClassName}`}>
                    <IconComponent src={item.image} alt={item.name}/>
                </button>
            ))}
        </div>
    );
};

export default ItemSelector;
