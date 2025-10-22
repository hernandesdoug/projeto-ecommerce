import { create } from 'zustand';

const useCartStore = create((set) =>  ({
    items: [],
    addItem: (produto) => set((state) => ({
        items: [...state.items, produto],
    })),
    removeItem: (produtoId) => set((state) => ({
        items: state.items.filter((item) => item.id !== produtoId),
    })),
    clearCart: () => ({ items: []}), 
}));

export default useCartStore;