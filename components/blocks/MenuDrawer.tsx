"use client";

import React, { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Heading } from "../ui/Typography";
import { cn } from "@/lib/utils";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: "core" | "loud";
}

export function MenuDrawer({ isOpen, onClose, theme = "core" }: MenuDrawerProps) {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isLoud = theme === "loud";
  const bgClass = isLoud ? "bg-[#2B2622]" : "bg-[#F5F2EA]";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const borderClass = isLoud ? "border-glint-ivory/10" : "border-glint-charcoal/10";
  const hoverClass = isLoud ? "hover:bg-[#1A1715]/50 hover:text-[#C9A227]" : "hover:bg-[#EAE2D3]/50 hover:text-[#C9A227]";

  const menuItems = [
    { name: "All Jewellery", href: "/shop" },
    { name: "Gift Boxes", href: "/shop/gift-boxes" },
    { name: "Watches", href: "/shop/watches" },
    { name: "Sunglasses", href: "/shop/sunglasses" },
    { name: "Sweet Deals", href: "/shop/sale", isNew: true },
    { name: "New Arrivals", href: "/shop/new" },
    { name: "Hats & Caps", href: "/shop/hats" },
    { name: "Shop the Look", href: "/shop/look" },
    { name: "Gifting Store", href: "/shop/gifting" },
    { name: "Scarves", href: "/shop/scarves" },
    { name: "Alpha", href: "/shop/alpha" },
    { name: "Build Your Own Box", href: "/shop/custom-box" },
    { name: "Shop By Mood", href: "/shop/mood" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer - Opening from the LEFT */}
          <m.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={cn("fixed inset-y-0 left-0 w-full max-w-sm shadow-2xl z-50 flex flex-col", bgClass)}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Header */}
            <div className={cn("flex items-center justify-between px-6 py-6 border-b", borderClass)}>
              <Heading as="h2" className={cn("text-xl font-serif", textClass)}>
                Menu
              </Heading>
              <button
                type="button"
                onClick={onClose}
                className={cn("transition-colors p-2 -mr-2", textClass, "hover:text-[#C9A227]")}
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-2 no-scrollbar">
              <nav className="flex flex-col">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between px-6 py-4 text-sm font-medium transition-colors border-b",
                      borderClass,
                      textClass,
                      hoverClass
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {item.name}
                      {item.isNew && (
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[#C9A227]/20 text-[#C9A227] rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <ChevronRight size={16} className="opacity-50" />
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Footer Area inside Menu */}
            <div className={cn("border-t px-6 py-6", borderClass, isLoud ? "bg-[#1A1715]/30" : "bg-white/30")}>
              <div className="flex gap-4">
                <Link href="/login" onClick={onClose} className={cn("text-sm hover:underline", textClass)}>
                  Login
                </Link>
                <span className="text-glint-charcoal/30">|</span>
                <Link href="/contact" onClick={onClose} className={cn("text-sm hover:underline", textClass)}>
                  Contact Support
                </Link>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
