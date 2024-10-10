import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useForm = create(immer((set) => ({
    isModal: false,
    setIsModal: (value) => set((state) => {
        state.isModal = value;
    })
})));

export default useForm;
