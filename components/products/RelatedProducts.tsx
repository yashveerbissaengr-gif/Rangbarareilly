import React from "react";
import { Product } from "@/types";
import { Heading, Text } from "../ui/Typography";
import { ProductGrid } from "../collections/ProductGrid";

import { cn } from "@/lib/utils";

interface RelatedProductsProps {
  products: Product[];
  theme?: "core" | "loud";
}

export function RelatedProducts({ products, theme = "core" }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  // Take only the first 4 for related
  const displayProducts = products.slice(0, 4);

  const isLoud = theme === "loud";
  const bgClass = isLoud ? "bg-[#1A1715]" : "bg-white";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const mutedTextClass = isLoud ? "text-glint-ivory/60" : "text-glint-charcoal/60";

  return (
    <div className={cn("w-full py-24 px-6 md:px-12 lg:px-24", bgClass)}>
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <Heading as="h2" className={cn("text-3xl md:text-4xl mb-4", textClass)}>
          You May Also Like
        </Heading>
        <Text className={mutedTextClass}>
          Curated pieces that complement your selection.
        </Text>
      </div>
      
      <ProductGrid products={displayProducts} theme={theme} />
    </div>
  );
}
