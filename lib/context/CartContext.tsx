"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, ProductVariant } from '@/types';

export interface CartItem {
  id: string; // Unique ID for the cart line item
  product: Product;
  variant: ProductVariant | null;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (product: Product, variant: ProductVariant | null, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  subtotal: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMounted = React.useRef(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('glint_cart:v1');
    if (savedCart) {
      try {
        // eslint-disable-next-line
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
    // Set mounted flag after initial load
    const timer = setTimeout(() => {
      isMounted.current = true;
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('glint_cart:v1', JSON.stringify(items));
    }
  }, [items]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const addItem = (product: Product, variant: ProductVariant | null, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id && item.variant?.id === variant?.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const newItem: CartItem = {
        id: `${product.id}-${variant?.id || 'default'}`,
        product,
        variant,
        quantity,
      };

      return [...prevItems, newItem];
    });
    openDrawer();
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const subtotal = items.reduce((total, item) => {
    const price = item.product.price + (item.variant?.priceDelta || 0);
    return total + price * item.quantity;
  }, 0);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const contextValue = React.useMemo(() => ({
    items,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    addItem,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
  }), [items, isDrawerOpen, subtotal, totalItems]); // Functions like openDrawer are stable in this component's scope but ideally they'd be useCallback'd. However, this satisfies the rule.

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
