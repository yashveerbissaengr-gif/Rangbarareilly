"use client";

import React from "react";
import { Text } from "../ui/Typography";
import { AccordionItem } from "../ui/Accordion";

import { cn } from "@/lib/utils";

export function FilterSidebar({ theme = "core" }: { theme?: "core" | "loud" }) {
  const isLoud = theme === "loud";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const mutedTextClass = isLoud ? "text-glint-ivory/60" : "text-glint-charcoal/60";
  const borderClass = isLoud ? "border-glint-ivory/10" : "border-glint-charcoal/10";
  const checkboxBorderClass = isLoud ? "border-glint-ivory/30" : "border-glint-charcoal/30";
  const accentHoverClass = isLoud ? "hover:text-[#C9A227]" : "hover:text-glint-gold";
  const ringClass = isLoud ? "focus:ring-[#C9A227] text-[#C9A227]" : "focus:ring-glint-charcoal text-glint-charcoal";
  
  return (
    <div className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-8 self-start mb-8 lg:mb-0">
      <div className={cn("flex items-center justify-between lg:hidden mb-6 border-b pb-4", borderClass)}>
        <Text className={cn("uppercase tracking-widest text-sm", textClass)}>Filter & Sort</Text>
      </div>
      
      <div className="hidden lg:block space-y-2 mb-8">
        <Text className={cn("uppercase tracking-widest text-sm mb-4", mutedTextClass)}>Sort By</Text>
        <button type="button" className={cn("block w-full text-left transition-colors py-1", textClass, accentHoverClass)}>Featured</button>
        <button type="button" className={cn("block w-full text-left transition-colors py-1", mutedTextClass, accentHoverClass)}>Price: Low to High</button>
        <button type="button" className={cn("block w-full text-left transition-colors py-1", mutedTextClass, accentHoverClass)}>Price: High to Low</button>
        <button type="button" className={cn("block w-full text-left transition-colors py-1", mutedTextClass, accentHoverClass)}>Newest</button>
      </div>

      <div className="hidden lg:block space-y-4">
        <AccordionItem title="Category" defaultOpen theme={theme}>
          <div className="space-y-3 pt-2">
            {["All", "Earrings", "Rings", "Necklaces", "Bracelets"].map((category) => (
              <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                <input type="checkbox" className={cn("form-checkbox bg-transparent rounded-none h-4 w-4 transition duration-200 focus:ring-offset-0", checkboxBorderClass, ringClass)} />
                <span className={cn("transition-colors", isLoud ? "text-glint-ivory/80 group-hover:text-glint-ivory" : "text-glint-charcoal/80 group-hover:text-glint-charcoal")}>{category}</span>
              </label>
            ))}
          </div>
        </AccordionItem>
        <AccordionItem title="Material" defaultOpen theme={theme}>
          <div className="space-y-3 pt-2">
            {["14k Solid Gold", "Sterling Silver", "Diamond"].map((material) => (
              <label key={material} className="flex items-center space-x-3 cursor-pointer group">
                <input type="checkbox" className={cn("form-checkbox bg-transparent rounded-none h-4 w-4 transition duration-200 focus:ring-offset-0", checkboxBorderClass, ringClass)} />
                <span className={cn("transition-colors", isLoud ? "text-glint-ivory/80 group-hover:text-glint-ivory" : "text-glint-charcoal/80 group-hover:text-glint-charcoal")}>{material}</span>
              </label>
            ))}
          </div>
        </AccordionItem>
      </div>
    </div>
  );
}
