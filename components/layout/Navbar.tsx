"use client";

import Link from "next/link";
import { Search, Heart, User, ShoppingBag, MapPin, Pencil } from "lucide-react";
import { LogoLink } from "../logo/LogoLink";

export function Navbar() {
  return (
    <>
      {/* ROW 1: Logo, Shipping Info, Search, Icons (Scrolls away) */}
      <header className="w-full border-b border-gray-100 bg-white relative z-40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center py-2 gap-4">
            
            {/* Left: Logo & Store Info */}
            <div className="flex items-center gap-6">
              {/* Using Strict Brand Component */}
              <div className="flex-shrink-0 pt-0.5">
                <LogoLink variant="black" size="md" />
              </div>
              
              <div className="hidden xl:flex items-center space-x-6 text-[11px] font-medium text-gray-800">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#C82245] mr-2"></span>
                  100 Stores Nearby
                </div>
                <div className="flex items-center">
                  <span className="mr-1">Shipping to</span>
                  <MapPin className="w-3.5 h-3.5 text-[#C82245] mx-1" />
                  <span className="font-semibold underline decoration-dashed decoration-gray-400 underline-offset-4">Nagpur</span>
                  <button className="ml-1 text-gray-500 hover:text-[#C82245]">
                    <Pencil className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Center: Search Bar */}
            <div className="flex-1 max-w-[600px] hidden lg:block mx-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for Earrings..."
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C82245] focus:border-[#C82245] sm:text-sm transition-colors"
                />
              </div>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-5 lg:space-x-6 flex-shrink-0">
              {/* Mobile Search Icon */}
              <button className="text-[#1e1e1e] hover:text-[#C82245] transition-colors lg:hidden">
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              
              <button className="text-[#1e1e1e] hover:text-[#C82245] transition-colors">
                <Heart className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.25} />
              </button>
              <button className="text-[#1e1e1e] hover:text-[#C82245] transition-colors">
                <User className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.25} />
              </button>
              <button className="text-[#1e1e1e] hover:text-[#C82245] transition-colors relative">
                <ShoppingBag className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.25} />
                <span className="absolute -top-1 -right-2 bg-[#C82245] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
            </div>
            
          </div>
        </div>
      </header>

      {/* ROW 2: Category Navigation (Sticky) */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scrollable container for mobile/tablet */}
          <div className="flex items-center space-x-6 lg:space-x-10 overflow-x-auto py-3 scrollbar-hide text-[13px] font-medium text-[#2d2d2d] whitespace-nowrap">
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Necklaces</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Earrings</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Bangles</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Accessories</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">92.5 Silver</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Wedding Store</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Occasions</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Collection</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Happy Customers</Link>
            <Link href="/shop" className="hover:text-[#C82245] transition-colors">Careers</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
