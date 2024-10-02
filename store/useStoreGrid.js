import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreGrid = create(immer((set) => ({
    activeGrids: [],
    setActiveGrids: (newGrid) => set((state) => { 
        const index = state.activeGrids.findIndex(
          (grid) => grid.x === newGrid.x && grid.y === newGrid.y
        );
    
        if (index !== -1) { 
          state.activeGrids.splice(index, 1);
        } else { 
          state.activeGrids.push(newGrid);
        }
      })
    })));

export default useStoreGrid;
