"use client";

import React, { useEffect, useState } from "react";
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
  // Use the passed theme as the default active tab
  const [activeTab, setActiveTab] = useState<"core" | "loud">(theme);

  // Sync activeTab with theme prop when drawer opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(theme);
    }
  }, [isOpen, theme]);

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

  const isLoud = activeTab === "loud";
  const bgClass = isLoud ? "bg-[#2B2622]" : "bg-[#F5F2EA]";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const borderClass = isLoud ? "border-glint-ivory/10" : "border-glint-charcoal/10";
  const hoverClass = isLoud ? "hover:bg-[#1A1715]/50 hover:text-[#C9A227]" : "hover:bg-[#EAE2D3]/50 hover:text-[#C9A227]";
  
  const activeTabClass = isLoud ? "bg-[#C9A227] text-[#2B2622]" : "bg-[#C9A227] text-white";
  const inactiveTabClass = isLoud ? "bg-transparent text-glint-ivory border border-glint-ivory/30" : "bg-transparent text-glint-charcoal border border-glint-charcoal/30";

  // Actual categories available in the store
  const coreCategories = [
    { name: "All Core", href: "/shop/all" },
    { name: "Studs", href: "/shop/studs" },
    { name: "Rings", href: "/shop/rings" },
    { name: "Necklaces", href: "/shop/necklaces" },
    { name: "Bracelets", href: "/shop/bracelets" },
  ];

  const loudCategories = [
    { name: "All Loud", href: "/shop/all" },
    { name: "Watches", href: "/shop/watches" },
    { name: "Studs", href: "/shop/studs" },
    { name: "Earrings", href: "/shop/earrings" },
  ];

  const menuItems = isLoud ? loudCategories : coreCategories;

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
            className={cn("fixed inset-y-0 left-0 w-full max-w-sm shadow-2xl z-50 flex flex-col transition-colors duration-300", bgClass)}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Header */}
            <div className={cn("flex items-center justify-between px-6 py-6 border-b", borderClass)}>
              <Heading as="h2" className={cn("text-xl font-serif", textClass)}>
                gl✧nt
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

            {/* Core / Loud Toggle */}
            <div className="px-6 py-4">
              <div className="flex w-full">
                <button 
                  onClick={() => setActiveTab("core")}
                  className={cn(
                    "flex-1 py-2 text-center text-xs uppercase tracking-widest font-sans transition-colors rounded-tl-sm rounded-bl-sm",
                    !isLoud ? activeTabClass : inactiveTabClass
                  )}
                >
                  Core
                </button>
                <button 
                  onClick={() => setActiveTab("loud")}
                  className={cn(
                    "flex-1 py-2 text-center text-xs uppercase tracking-widest font-sans transition-colors rounded-tr-sm rounded-br-sm border-l-0",
                    isLoud ? activeTabClass : inactiveTabClass
                  )}
                >
                  Loud
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-2 no-scrollbar">
              <nav className="flex flex-col">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
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
                        </div>
                        <ChevronRight size={16} className="opacity-50" />
                      </Link>
                    ))}
                  </m.div>
                </AnimatePresence>
              </nav>
            </div>
            
            {/* Footer Area inside Menu */}
            <div className={cn("border-t px-6 py-6 transition-colors duration-300", borderClass, isLoud ? "bg-[#1A1715]/30" : "bg-white/30")}>
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
