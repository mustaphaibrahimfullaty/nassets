import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Motorcycle } from "@/types";

interface CompareStore {
  motorcycles: Motorcycle[];
  addMotorcycle: (motorcycle: Motorcycle) => void;
  removeMotorcycle: (id: string) => void;
  clearCompare: () => void;
}

export const useCompareStore = create<CompareStore>()(
  persist(
    (set, get) => ({
      motorcycles: [],
      addMotorcycle: (motorcycle) => {
        const { motorcycles } = get();
        if (motorcycles.length < 4 && !motorcycles.find((m) => m.id === motorcycle.id)) {
          set({ motorcycles: [...motorcycles, motorcycle] });
        }
      },
      removeMotorcycle: (id) =>
        set((state) => ({
          motorcycles: state.motorcycles.filter((m) => m.id !== id),
        })),
      clearCompare: () => set({ motorcycles: [] }),
    }),
    {
      name: "compare-storage",
    }
  )
);
