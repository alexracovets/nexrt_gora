'use client';
import { memo, useCallback, useEffect, useState } from 'react';
import useStoreGrid from '@/store/useStoreGrid';

interface Grid {
    x: number;
    y: number;
    price: number;
    isSelected: boolean;
    isAvailable: boolean;
}

const GridItem = memo(({ height, width, grid }: { height: string, width: string, grid: Grid }) => {
    const setActiveGrids = useStoreGrid(state => state.setActiveGrids);
    const isGridActive = useStoreGrid(useCallback(
        (state) => state.activeGrids.some((activeGrid: Grid) => activeGrid.x === grid.x && activeGrid.y === grid.y),
        [grid.x, grid.y]
    ));
    const [color, setColor] = useState('bg-regal-green');
    const [opacity, setOpacity] = useState('opacity-60');

    useEffect(() => {
        setOpacity(isGridActive ? 'opacity-100' : 'opacity-50');
        switch (grid.price) {
            case 100:
                setColor('bg-regal-green');
                break;
            case 200:
                setColor('bg-regal-yellow');
                break;
            case 300:
                setColor('bg-regal-pink');
                break;
            case 500:
                setColor('bg-regal-violet');
                break;
            default:
                setColor('bg-regal-white');
        }
    }, [grid, isGridActive]);

    return (
        <li
            className={`bg-regal-white block cursor-pointer`}
            style={{ height, width }}
            onClick={() => setActiveGrids(grid)}
        >
            <div className={`w-full h-full ${color} ${opacity} outline outline-black outline-[0.1rem] rounded-[0.4rem]`} />
        </li>
    );
});

GridItem.displayName = 'GridItem';

export default GridItem;
