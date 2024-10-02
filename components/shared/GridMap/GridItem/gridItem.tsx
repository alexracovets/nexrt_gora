'use client';
import { memo, useCallback, useEffect, useState } from 'react';
import useStoreGrid from "../../../../store/useStoreGrid";

// Інтерфейс для визначення типу Grid
interface Grid {
    x: number;
    y: number;
    section: number;
    isSelected: boolean;
    isAvailable: boolean;
}

const GridItem = memo(({ height, width, grid }: { height: string, width: string, grid: Grid }) => {
    const setActiveGrids = useStoreGrid(state => state.setActiveGrids);
    const isGridActive = useStoreGrid(useCallback(
        (state) => state.activeGrids.some((activeGrid) => activeGrid.x === grid.x && activeGrid.y === grid.y),
        [grid.x, grid.y]
    ));
    const [color, setColor] = useState('bg-regal-green');
    const [opacity, setOpacity] = useState('opacity-60');
    
    useEffect(() => {
        setOpacity(isGridActive ? 'opacity-100' : 'opacity-60');
        switch (grid.section) {
            case 0:
                setColor('bg-regal-green');
                break;
            case 1:
                setColor('bg-regal-yellow');
                break;
            case 2:
                setColor('bg-regal-pink');
                break;
            case 3:
                setColor('bg-regal-violet');
                break;
            default:
                setColor('bg-regal-white');
        }
    }, [grid, isGridActive]);

    return (
        <li
            className={`${color} ${opacity} border-black border-[1px] rounded-sm`}
            style={{ height, width }}
            onClick={() => setActiveGrids(grid)}
        >
        </li>
    );
});

GridItem.displayName = 'GridItem';

export default GridItem;
