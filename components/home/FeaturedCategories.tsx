"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { Heading, Text } from "../ui/Typography";
import { Product } from "@/types";

import { cn } from "@/lib/utils";

interface FeaturedCategoriesProps {
  products: Product[];
  theme?: "core" | "loud";
}

export function FeaturedCategories({ products, theme = "core" }: FeaturedCategoriesProps) {
  const isLoud = theme === "loud";
  const bgClass = isLoud ? "bg-[#2B2622]" : "bg-glint-ivory";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const borderClass = isLoud ? "border-glint-ivory/30 hover:border-glint-ivory" : "border-glint-charcoal/30 hover:border-glint-charcoal";

  // Extract unique categories and their first product image
  const categories = Array.from(new Set(products.map(p => p.collection))).map(collectionName => {
    const firstProduct = products.find(p => p.collection === collectionName);
    const primaryImage = firstProduct?.images.find(img => img.isPrimary) || firstProduct?.images[0];
    return {
      title: collectionName,
      slug: collectionName.toLowerCase(),
      image: primaryImage?.url || ""
    };
  });

  return (
    <section className={cn("py-24 px-6 md:px-12 lg:px-24", bgClass)}>
      <div className="flex justify-between items-end mb-16">
        <Heading as="h2" className={cn("text-3xl md:text-4xl", textClass)}>
          {isLoud ? "Statement Categories" : "Essential Categories"}
        </Heading>
        <Link href={`/shop`} className={cn("text-sm tracking-widest uppercase pb-1 border-b transition-colors", borderClass, textClass)}>
          Shop All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => {
          return (
            <m.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <Link href={`/shop/${category.slug}`}>
                <div className={cn("relative aspect-[4/5] mb-6 overflow-hidden rounded-xl", isLoud ? "bg-[#2B2622]" : "bg-[#F5F2EA]")}>
                  {category.image && (
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-col text-center">
                  <Text className={cn("font-medium text-lg uppercase tracking-widest", textClass)}>{category.title}</Text>
                </div>
              </Link>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
