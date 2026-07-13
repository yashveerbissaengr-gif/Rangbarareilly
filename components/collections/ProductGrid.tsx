"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Text } from "../ui/Typography";
import { Product } from "@/types";

import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  theme?: "core" | "loud";
}

export function ProductGrid({ products, theme = "core" }: ProductGridProps) {
  const isLoud = theme === "loud";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const mutedTextClass = isLoud ? "text-glint-ivory/60" : "text-glint-charcoal/60";
  
  if (products.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-center">
        <Text className={cn("text-xl mb-4", mutedTextClass)}>No products found</Text>
        <Text className={cn("opacity-70", mutedTextClass)}>Try adjusting your filters.</Text>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
      {products.map((product, index) => {
        const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];
        
        // Determine if this specific product is loud
        const isProductLoud = product.tags.includes("loud");
        const cardBgClass = isProductLoud ? "bg-[#2B2622]" : "bg-[#F5F2EA]";
        
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-pointer"
          >
            <Link href={`/products/${product.slug}`}>
              <div className={cn("relative aspect-[4/5] mb-6 overflow-hidden rounded-xl", cardBgClass)}>
                {primaryImage && (
                  <Image
                    src={primaryImage.url}
                    alt={primaryImage.alt || product.title}
                    fill
                    className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <Text className={cn("font-medium tracking-wide", textClass)}>{product.title}</Text>
                <Text className={cn("mt-1", mutedTextClass)}>₹{product.price}</Text>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
