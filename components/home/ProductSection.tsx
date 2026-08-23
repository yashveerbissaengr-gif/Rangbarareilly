"use client";

import React from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types";

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export const ProductSection = ({ title, products, viewAllLink }: ProductSectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight mb-2 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#FF6B6C] rounded-full"></span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        {viewAllLink && (
          <div className="mt-10 flex justify-center">
            <Link 
              href={viewAllLink}
              className="px-8 py-3 bg-[#FFEAEA] text-[#FF6B6C] font-bold uppercase rounded-full hover:bg-[#FF6B6C] hover:text-white transition-colors tracking-wide text-sm"
            >
              View All
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
