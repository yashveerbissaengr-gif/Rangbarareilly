"use client";

import React from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";

export const Header = () => {
  const { cart, setIsCartOpen } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-gray-700">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#FF6B6C] tracking-tight">Rangbareilly</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/collections/all" className="hover:text-[#FF6B6C] transition-colors">CATEGORIES</Link>
          <Link href="/collections/hot-selling" className="hover:text-[#FF6B6C] transition-colors">HOT DEALS</Link>
          <Link href="/collections/all" className="hover:text-[#FF6B6C] transition-colors">STORE</Link>
          <Link href="/track-order" className="hover:text-[#FF6B6C] transition-colors">TRACK ORDER</Link>
          <Link href="/returns" className="hover:text-[#FF6B6C] transition-colors">RETURNS/EXCHANGE</Link>
          <Link href="/contact" className="hover:text-[#FF6B6C] transition-colors">CONTACT US</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="hidden sm:block hover:text-[#FF6B6C] transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden sm:block hover:text-[#FF6B6C] transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="hidden sm:block hover:text-[#FF6B6C] transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-[#FF6B6C] transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#8B263E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
