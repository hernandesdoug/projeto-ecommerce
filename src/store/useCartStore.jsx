import { create } from 'zustand';


const useCartStore = create((set) =>  ({
    items: [],
    addItem: (item) => set((state) => ({
        items: [...state.items, item],
    })),
    removeItem: (itemId) => set((state) => ({
        items: state.items.filter((item) => item.id !== itemId),
    })),
    clearCart: () => ({ items: []}), 
}));

export default useCartStore;