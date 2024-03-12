import { create } from "zustand";
//import { persist } from "zustand/middleware";

export const useCounterStore = create(
  //persist(
  (set) => ({
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
  }),
  { name: "contador-storage" }
);
