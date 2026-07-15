"use client";

import React, { useState } from "react";
import Link from "next/link";
import { m, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, ShoppingBag, Heart, Menu } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import { cn } from "@/lib/utils";

export function Navigation({ theme = "core" }: { theme?: "core" | "loud" }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { openDrawer, totalItems } = useCart();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const isLoud = theme === "loud";
  const bgClass = isLoud ? "bg-[#2B2622]" : "bg-[#F5F2EA]";
  const borderClass = isLoud ? "border-[#C9A227]/20" : "border-glint-charcoal/10";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const hoverClass = isLoud ? "hover:text-[#C9A227]" : "hover:text-glint-gold";

  return (
    <m.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        bgClass,
        borderClass,
        isScrolled ? "py-2 shadow-sm" : "py-3"
      )}
    >
      <div className="w-full px-6 lg:px-12 mx-auto flex items-center justify-between">
        {/* Left: Mobile Menu & Navigation Links */}
        <div className="flex items-center space-x-8 w-1/3">
          <button 
            type="button"
            aria-label="Toggle mobile menu"
            className={cn("md:hidden", textClass)}
            onClick={() => alert("Mobile menu coming soon")}
          >
            <Menu size={24} />
          </button>
          
          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/shop/all" className={cn("text-xs uppercase tracking-widest font-sans transition-colors", textClass, hoverClass)}>
              Shop
            </Link>
            <Link href="/about" className={cn("text-xs uppercase tracking-widest font-sans transition-colors", textClass, hoverClass)}>
              About
            </Link>
          </nav>
        </div>

        {/* Center: Logo */}
        <div className="w-1/3 text-center flex justify-center items-center">
          <Link href="/">
            <span className={cn("font-serif font-bold text-4xl md:text-5xl tracking-tight leading-none block", textClass)}>
              gl<span className="text-[0.55em] inline-block align-middle transform -translate-y-[15%] mx-[1px]">✧</span>nt
            </span>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end space-x-6 w-1/3">
          <button 
            type="button"
            aria-label="Search"
            className={cn("hidden md:flex items-center space-x-2 text-sm transition-colors", textClass, hoverClass)}
            onClick={() => alert("Search coming soon")}
          >
            <Search size={18} />
          </button>
          <button 
            type="button"
            aria-label="Wishlist"
            className={cn("hidden md:block transition-colors", textClass, hoverClass)}
            onClick={() => alert("Wishlist coming soon")}
          >
            <Heart size={20} />
          </button>
          <button 
            type="button"
            aria-label="Shopping bag"
            className={cn("flex items-center transition-colors relative", textClass, hoverClass)}
            onClick={openDrawer}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className={cn(
                "absolute -top-1 -right-2 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold",
                isLoud ? "bg-[#C9A227] text-[#2B2622]" : "bg-glint-charcoal text-glint-ivory"
              )}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </m.header>
  );
}
