'use client';
import { createContext, useContext, useState, useEffect } from 'react';

export const CarouselContext = createContext(undefined);

export function useCarousel() {
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error('useCarousel must be used within an CarouselProvider');
    }
    return context;
}

export function CarouselProvider({
    children,
    initialIndex = 0,
    onIndexChange,
    disableDrag = false,
}) {
    const [index, setIndex] = useState(initialIndex);
    const [itemsCount, setItemsCount] = useState(0);

    const handleSetIndex = (newIndex) => {
        setIndex(newIndex);
        onIndexChange?.(newIndex);
    };

    useEffect(() => {
        setIndex(initialIndex);
    }, [initialIndex]);

    return (
        <CarouselContext.Provider
            value={{
                index,
                setIndex: handleSetIndex,
                itemsCount,
                setItemsCount,
                disableDrag,
            }}
        >
            {children}
        </CarouselContext.Provider>
    );
}
