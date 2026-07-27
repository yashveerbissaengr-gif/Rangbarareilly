"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading, Text } from "../ui/Typography";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProductCarouselProps {
  title: string;
  products: Product[];
  theme?: "core" | "loud" | "global";
}

export function ProductCarousel({ title, products, theme = "core" }: ProductCarouselProps) {
  const isLoud = theme === "loud";
  const isGlobal = theme === "global";
  
  let bgClass = "bg-glint-ivory";
  let textClass = "text-glint-charcoal";
  let mutedTextClass = "text-glint-charcoal/60";
  let cardBgClass = "bg-[#F5F2EA]";
  
  if (isLoud) {
    bgClass = "bg-[#2B2622]";
    textClass = "text-glint-ivory";
    mutedTextClass = "text-glint-ivory/60";
    cardBgClass = "bg-black/20";
  } else if (isGlobal) {
    bgClass = "bg-white";
    cardBgClass = "bg-[#F5F2EA]";
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (products.length === 0) return null;

  return (
    <section className={cn("w-full py-16 px-6 md:px-12 lg:px-24 overflow-hidden", bgClass)}>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-10">
          <Heading as="h2" className={cn("text-3xl md:text-4xl", textClass)}>
            {title}
          </Heading>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollLeft}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border transition-colors",
                isLoud ? "border-glint-ivory/20 text-glint-ivory hover:bg-glint-ivory hover:text-glint-charcoal" : "border-glint-charcoal/20 text-glint-charcoal hover:bg-glint-charcoal hover:text-white"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border transition-colors",
                isLoud ? "border-glint-ivory/20 text-glint-ivory hover:bg-glint-ivory hover:text-glint-charcoal" : "border-glint-charcoal/20 text-glint-charcoal hover:bg-glint-charcoal hover:text-white"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => {
            const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];
            
            return (
              <div 
                key={product.id} 
                className="relative flex-none w-[260px] md:w-[320px] snap-center group cursor-pointer"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className={cn("relative aspect-[4/5] mb-4 overflow-hidden rounded-xl", cardBgClass)}>
                    {primaryImage && (
                      <Image
                        src={primaryImage.url}
                        alt={primaryImage.alt || product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Text className={cn("font-medium text-lg uppercase tracking-widest truncate", textClass)}>{product.title}</Text>
                    <Text className={cn("mt-1", mutedTextClass)}>₹{product.price}</Text>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
