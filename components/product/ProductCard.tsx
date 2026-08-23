"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/lib/context/CartContext";
import { Product } from "@/types";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
        {product.isBestSeller && (
          <span className="absolute top-2 left-2 z-10 bg-[#8B263E] text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded-md">
            Hot Selling
          </span>
        )}
        <Image
          src={product.images[0]?.url || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-3 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-medium text-sm text-gray-800 line-clamp-1">
            {product.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-3 bg-[#FF6B6C] hover:bg-[#ff5254] text-white font-bold text-xs uppercase py-2.5 rounded-lg transition-colors shadow-sm"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
