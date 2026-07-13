"use client";

import React, { useState } from "react";
import { Product, ProductVariant } from "@/types";
import { Button } from "../ui/Button";
import { Text } from "../ui/Typography";
import { useCart } from "@/lib/context/CartContext";

import { cn } from "@/lib/utils";

interface AddToCartProps {
  product: Product;
  theme?: "core" | "loud";
}

export function AddToCart({ product, theme = "core" }: AddToCartProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants.length > 0 ? product.variants[0] : null
  );
  
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addItem(product, selectedVariant, 1);
  };

  const currentPrice = product.price + (selectedVariant?.priceDelta || 0);

  const isLoud = theme === "loud";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const mutedTextClass = isLoud ? "text-glint-ivory/60" : "text-glint-charcoal/60";
  const subtleTextClass = isLoud ? "text-glint-ivory/80" : "text-glint-charcoal/80";
  const borderClass = isLoud ? "border-glint-ivory/30" : "border-glint-charcoal/30";
  const ringClass = isLoud ? "focus:ring-[#C9A227] text-[#C9A227]" : "focus:ring-glint-charcoal text-glint-charcoal";
  
  return (
    <div className="flex flex-col mt-8 w-full">
      {/* Variant Selection */}
      {product.variants.length > 0 && (
        <div className="mb-8 space-y-4">
          <Text className={cn("text-sm tracking-widest uppercase", mutedTextClass)}>
            Material
          </Text>
          <div className="flex flex-col gap-3">
            {product.variants.map((variant) => (
              <label
                key={variant.id}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="material"
                  value={variant.id}
                  checked={selectedVariant?.id === variant.id}
                  onChange={() => setSelectedVariant(variant)}
                  className={cn("form-radio bg-transparent h-4 w-4 transition duration-200", borderClass, ringClass)}
                />
                <span className={cn("transition-colors", selectedVariant?.id === variant.id ? `font-medium ${textClass}` : subtleTextClass)}>
                  {variant.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Action Area */}
      <div className="flex flex-col gap-4">
        <Text className={cn("text-xl mb-2", textClass)}>₹{currentPrice}</Text>
        <Button 
          onClick={handleAddToCart}
          className="w-full h-14"
          disabled={!selectedVariant || selectedVariant.stock <= 0}
          theme={theme}
        >
          {selectedVariant?.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
        <Text className={cn("text-xs text-center uppercase tracking-widest mt-2", mutedTextClass)}>
          Complimentary shipping & returns
        </Text>
      </div>
    </div>
  );
}
