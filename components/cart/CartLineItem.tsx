"use client";

import React from "react";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useCart, CartItem } from "@/lib/context/CartContext";
import { Text } from "../ui/Typography";

interface CartLineItemProps {
  item: CartItem;
}

export function CartLineItem({ item }: CartLineItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const price = item.product.price + (item.variant?.priceDelta || 0);
  const primaryImage = item.product.images.find(img => img.isPrimary) || item.product.images[0];

  return (
    <div className="flex gap-4 py-6 border-b border-glint-charcoal/10">
      {/* Image */}
      <div className="relative w-24 h-32 flex-shrink-0 bg-glint-ivory">
        {primaryImage && (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt || item.product.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex justify-between items-start">
          <div>
            <Text className="text-glint-charcoal font-medium">
              {item.product.title}
            </Text>
            {item.variant && (
              <Text className="text-sm text-glint-charcoal/60 mt-1">
                {item.variant.name}
              </Text>
            )}
          </div>
          <button 
            onClick={() => removeItem(item.id)}
            className="text-glint-charcoal/40 hover:text-glint-charcoal transition-colors p-1"
            aria-label="Remove item"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex justify-between items-end mt-4">
          <div className="flex items-center border border-glint-charcoal/20">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 text-glint-charcoal/60 hover:text-glint-charcoal transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="px-2 text-sm text-glint-charcoal w-8 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 text-glint-charcoal/60 hover:text-glint-charcoal transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
          <Text className="text-glint-charcoal">₹{price * item.quantity}</Text>
        </div>
      </div>
    </div>
  );
}
