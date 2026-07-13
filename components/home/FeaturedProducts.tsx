"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { Heading, Text } from "../ui/Typography";
import { Product } from "@/types";

import { cn } from "@/lib/utils";

interface FeaturedProductsProps {
  products: Product[];
  theme?: "core" | "loud";
}

export function FeaturedProducts({ products, theme = "core" }: FeaturedProductsProps) {
  const isLoud = theme === "loud";
  const bgClass = isLoud ? "bg-[#2B2622]" : "bg-glint-ivory";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const mutedTextClass = isLoud ? "text-glint-ivory/60" : "text-glint-charcoal/60";
  const borderClass = isLoud ? "border-glint-ivory/30 hover:border-glint-ivory" : "border-glint-charcoal/30 hover:border-glint-charcoal";

  return (
    <section className={cn("py-24 px-6 md:px-12 lg:px-24", bgClass)}>
      <div className="flex justify-between items-end mb-16">
        <Heading as="h2" className={cn("text-3xl md:text-4xl", textClass)}>
          {isLoud ? "Statement Pieces" : "The Essentials"}
        </Heading>
        <Link href={`/collections/all`} className={cn("text-sm tracking-widest uppercase pb-1 border-b transition-colors", borderClass, textClass)}>
          Shop All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => {
          const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];
          
          return (
            <m.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <Link href={`/products/${product.slug}`}>
                <div className={cn("relative aspect-[4/5] mb-6 overflow-hidden rounded-xl", isLoud ? "bg-[#2B2622]" : "bg-[#F5F2EA]")}>
                  {primaryImage && (
                    <Image
                      src={primaryImage.url}
                      alt={primaryImage.alt || product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <Text className={cn("font-medium", textClass)}>{product.title}</Text>
                  <Text className={cn("mt-1", mutedTextClass)}>₹{product.price}</Text>
                </div>
              </Link>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
