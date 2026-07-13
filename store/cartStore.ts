import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Product } from '@/types';

export interface CartItem {
  id: string; // usually variant_id or product_id
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (isOpen?: boolean) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isCartOpen: false,
      
      addItem: (product, quantity = 1) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id);
        
        if (existingItem) {
          return {
            items: state.items.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
            isCartOpen: true
          };
        }
        
        return {
          items: [...state.items, { id: product.id, product, quantity }],
          isCartOpen: true
        };
      }),
      
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(item => item.id !== productId)
      })),
      
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item => 
          item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
      })),
      
      clearCart: () => set({ items: [] }),
      
      toggleCart: (isOpen) => set((state) => ({ 
        isCartOpen: isOpen !== undefined ? isOpen : !state.isCartOpen 
      })),
    }),
    {
      name: 'rang-bareilly-cart', // local storage key
    }
  )
);
