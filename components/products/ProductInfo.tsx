"use client";

import React from "react";
import { Product } from "@/types";
import { Heading, Text } from "../ui/Typography";
import { AddToCart } from "./AddToCart";
import { cn } from "@/lib/utils";
import { AccordionItem } from "../ui/Accordion";

interface ProductInfoProps {
  product: Product;
  theme?: "core" | "loud";
}

export function ProductInfo({ product, theme = "core" }: ProductInfoProps) {
  const isLoud = theme === "loud";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const mutedTextClass = isLoud ? "text-glint-ivory/60" : "text-glint-charcoal/60";
  const borderClass = isLoud ? "border-glint-ivory/20" : "border-glint-charcoal/20";

  return (
    <div className={cn("w-full lg:w-1/2 flex flex-col items-center justify-center px-6 md:px-12 py-16 lg:py-24 lg:min-h-screen", isLoud ? "bg-[#2B2622]" : "bg-[#F5F2EA]")}>
      <div className="max-w-md w-full mx-auto flex flex-col gap-6">
        
        {/* Title and Rating */}
        <div className="flex flex-col gap-2">
          <Heading as="h1" className={cn("text-4xl md:text-5xl font-light tracking-wide", textClass)}>
            {product.title}
          </Heading>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={cn("w-4 h-4", i < Math.floor(product.rating || 0) ? textClass : mutedTextClass)} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <Text className={cn("text-sm", mutedTextClass)}>
              ({product.reviewCount || 0} Reviews)
            </Text>
          </div>
        </div>

        {/* Description */}
        <Text className={cn("text-lg leading-relaxed mt-4", textClass)}>
          {product.description}
        </Text>

        {/* Add to Cart Component */}
        <div className="mt-8">
          <AddToCart product={product} theme={theme} />
        </div>

        {/* Details Accordion */}
        <div className={cn("mt-16 border-t", borderClass)}>
          <AccordionItem title="Details" theme={theme}>
            {product.material && <p className="mb-2"><strong>Material:</strong> {product.material}</p>}
            {product.care && <p><strong>Care:</strong> {product.care}</p>}
          </AccordionItem>
          
          <AccordionItem title="Shipping & Returns" theme={theme}>
            {product.shipping && <p className="mb-2">{product.shipping}</p>}
            {product.returns && <p>{product.returns}</p>}
          </AccordionItem>
        </div>

      </div>
    </div>
  );
}
