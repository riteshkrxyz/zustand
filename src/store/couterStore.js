import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    setCount: (count) => set({ count })
}))

export default useCounterStore;