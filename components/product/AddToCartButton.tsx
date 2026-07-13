"use client";

import { useCartStore } from "@/store/cartStore";
import { type Product } from "@/types";

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button 
      onClick={() => addItem(product)}
      className="flex-1 bg-black text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E30613] transition-colors"
    >
      Add to Cart
    </button>
  );
}
