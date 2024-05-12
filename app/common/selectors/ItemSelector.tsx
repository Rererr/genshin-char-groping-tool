import React from 'react';

interface ItemSelectorProps {
    items: Array<{ id: string; image: string; name: string }>;
    selectedItems: Array<string>;
    toggleItem: (id: string) => void;
    selectedClassName: string;
    defaultClassName: string;
    additionalClassName?: string;
    IconComponent: React.ComponentType<{ src: string; alt: string }>;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({
                                                       items,
                                                       selectedItems,
                                                       toggleItem,
                                                       selectedClassName,
                                                       defaultClassName,
                                                       additionalClassName: additionalClassName,
                                                       IconComponent
                                                   }) => {
    return (
        <div className={`grid
            gap-2
            h-12 tb:h-20
            w-full
            ${additionalClassName}
        `}>
            {items.map(item => (
                <button key={item.id} onClick={() => toggleItem(item.id)}
                        className={`col-span-1 w-12 tb:w-20 h-12 tb:h-20 ${selectedItems.includes(item.id) ? selectedClassName : defaultClassName}`}>
                    <IconComponent src={item.image} alt={item.name}/>
                </button>
            ))}
        </div>
    );
};

export default ItemSelector;
