"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { Heading, Text } from "../ui/Typography";
import { Product } from "@/types";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface FilterSectionProps {
  products: Product[];
  theme?: "core" | "loud";
}

export function FilterSection({ products, theme = "core" }: FilterSectionProps) {
  const isLoud = theme === "loud";
  const bgClass = isLoud ? "bg-[#2B2622]" : "bg-glint-ivory";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const borderClass = isLoud ? "border-glint-ivory/20" : "border-glint-charcoal/20";
  const activeTabClass = isLoud ? "bg-[#C9A227] text-[#2B2622]" : "bg-[#C9A227] text-white";
  const inactiveTabClass = isLoud ? "bg-transparent text-glint-ivory border border-glint-ivory/30" : "bg-transparent text-glint-charcoal border border-glint-charcoal/30";
  const cardBgClass = isLoud ? "bg-black/20" : "bg-[#F5F2EA]";
  
  // Custom sidebar active state - similar to Salty's purple active state
  const sidebarActiveClass = isLoud ? "bg-[#1A1715] text-[#C9A227] border-l-4 border-[#C9A227]" : "bg-[#EAE2D3] text-[#C9A227] border-l-4 border-[#C9A227]";
  const sidebarHoverClass = isLoud ? "hover:bg-[#1A1715]/50" : "hover:bg-[#EAE2D3]/50";

  // Using the provided product themes as the main toggle (Core vs Loud)
  const [activeTheme, setActiveTheme] = useState<"core" | "loud">("core");
  const [activeCategory, setActiveCategory] = useState<string>("All Jewellery");

  // Get all unique categories across all products
  const allCategories = Array.from(new Set(products.map(p => p.collection)));
  
  // Categories for the sidebar - matching the screenshot style
  const sidebarCategories = [
    "All Jewellery",
    "Gift Boxes",
    "Watches",
    "Sunglasses",
    "Sweet Deals",
    "New Arrivals",
    "Hats & Caps",
    "Shop the Look",
    "Gifting Store",
    "Scarves",
    "Alpha",
    "Build Your Own Box",
    "Shop By Mood"
  ];

  // Filter products based on active theme
  const filteredThemeProducts = products.filter(p => p.tags.includes(activeTheme));
  
  // Extract categories present in the filtered theme products
  const availableCategories = Array.from(new Set(filteredThemeProducts.map(p => p.collection)));
  
  // Determine which categories to show in the grid
  const gridCategories = activeCategory === "All Jewellery" 
    ? availableCategories
    : availableCategories.filter(c => c === activeCategory);

  return (
    <section className={cn("py-16 w-full", bgClass)}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Top Toggle (Core / Loud) */}
        <div className="flex w-full md:w-1/2 lg:w-1/3 mb-6">
          <button 
            onClick={() => setActiveTheme("core")}
            className={cn(
              "flex-1 py-3 text-center text-sm font-medium transition-colors rounded-tl-md rounded-bl-md",
              activeTheme === "core" ? activeTabClass : inactiveTabClass
            )}
          >
            Core
          </button>
          <button 
            onClick={() => setActiveTheme("loud")}
            className={cn(
              "flex-1 py-3 text-center text-sm font-medium transition-colors rounded-tr-md rounded-br-md border-l-0",
              activeTheme === "loud" ? activeTabClass : inactiveTabClass
            )}
          >
            Loud
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className={cn("w-full md:w-1/4 lg:w-1/5 flex flex-col rounded-md overflow-hidden border", borderClass)}>
            {sidebarCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "flex items-center justify-between py-4 px-4 text-left text-sm font-medium transition-colors border-b last:border-b-0",
                  borderClass,
                  activeCategory === category ? sidebarActiveClass : `${textClass} ${sidebarHoverClass}`
                )}
              >
                <div className="flex items-center gap-2">
                  {category}
                  {category === "Sweet Deals" && (
                    <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[#C9A227]/20 text-[#C9A227] rounded-full">New</span>
                  )}
                </div>
                {activeCategory === category && (
                  <ChevronRight size={16} />
                )}
              </button>
            ))}
          </div>

          {/* Main Grid Content */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            {gridCategories.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {gridCategories.map((categoryName, index) => {
                  // Find a representative product for this category
                  const representativeProduct = filteredThemeProducts.find(p => p.collection === categoryName);
                  const primaryImage = representativeProduct?.images.find(img => img.isPrimary) || representativeProduct?.images[0];
                  
                  return (
                    <m.div
                      key={categoryName}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group flex flex-col items-center"
                    >
                      <Link href={`/shop/${categoryName.toLowerCase()}`} className="w-full flex flex-col items-center">
                        <div className={cn("w-full aspect-[4/3] rounded-lg overflow-hidden mb-3 relative flex items-center justify-center p-6 transition-transform duration-300 group-hover:shadow-md", cardBgClass)}>
                          {primaryImage ? (
                            <Image
                              src={primaryImage.url}
                              alt={categoryName}
                              fill
                              sizes="(max-width: 768px) 50vw, 25vw"
                              className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Text className="opacity-50">Image coming soon</Text>
                            </div>
                          )}
                        </div>
                        <Text className={cn("text-sm font-medium text-center", textClass)}>{categoryName}</Text>
                      </Link>
                    </m.div>
                  );
                })}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center py-24 text-center h-full">
                <Text className={cn("text-xl mb-4 text-[#C9A227]")}>No categories found</Text>
                <Text className={cn("opacity-70", textClass)}>There are no items matching this filter right now.</Text>
              </div>
            )}
            
            {gridCategories.length > 0 && (
              <div className="w-full flex justify-end mt-12">
                <Link href="/shop" className={cn("text-sm font-medium hover:underline", textClass, "text-[#C9A227]")}>
                  Shop all jewellery →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
