import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Motorcycle } from "@/types";
import { motorcycles } from "@/data/motorcycles";

export interface EnrichedCartItem extends CartItem {
  motorcycle: Motorcycle;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (motorcycleId: string, color: string) => void;
  updateQuantity: (motorcycleId: string, color: string, quantity: number) => void;
  clearCart: () => void;
  getEnrichedItems: () => EnrichedCartItem[];
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.motorcycleId === newItem.motorcycleId && item.color === newItem.color
          );

          if (existingItemIndex >= 0) {
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += newItem.quantity;
            return { items: newItems };
          }
          return { items: [...state.items, newItem] };
        });
      },
      removeItem: (motorcycleId, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.motorcycleId === motorcycleId && item.color === color)
          ),
        }));
      },
      updateQuantity: (motorcycleId, color, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.motorcycleId === motorcycleId && item.color === color
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getEnrichedItems: () => {
        const { items } = get();
        return items
          .map((item) => {
            const motorcycle = motorcycles.find((m) => m.id === item.motorcycleId);
            if (!motorcycle) return null;
            return { ...item, motorcycle };
          })
          .filter((item): item is EnrichedCartItem => item !== null);
      },
      getTotalPrice: () => {
        const enrichedItems = get().getEnrichedItems();
        return enrichedItems.reduce((total, item) => total + item.motorcycle.price * item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
