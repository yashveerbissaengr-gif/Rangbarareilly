"use client";

import React from "react";
import { useCart } from "@/lib/context/CartContext";
import { Product } from "@/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full md:w-auto px-12 py-4 bg-[#FF6B6C] hover:bg-[#ff5254] text-white font-bold text-sm uppercase tracking-wide rounded-xl transition-colors shadow-sm"
    >
      Add to Cart
    </button>
  );
}
