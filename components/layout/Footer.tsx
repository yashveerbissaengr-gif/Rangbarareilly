"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-24 md:pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#FF6B6C] mb-4">Rangbareilly</h2>
            <p className="text-gray-600 mb-6 max-w-sm">
              Subscribe to our newsletter and be the first to know about new collections and exclusive offers.
            </p>
            <form className="flex gap-2 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B6C] focus:ring-1 focus:ring-[#FF6B6C]"
                required
              />
              <button 
                type="submit" 
                className="bg-[#8B263E] text-white px-6 py-3 rounded-xl font-bold uppercase text-sm hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-[#FF6B6C]">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#FF6B6C]">Contact Us</Link></li>
              <li><Link href="/track-order" className="text-gray-600 hover:text-[#FF6B6C]">Track Order</Link></li>
              <li><Link href="/faqs" className="text-gray-600 hover:text-[#FF6B6C]">FAQs</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Policies</h3>
            <ul className="space-y-3">
              <li><Link href="/shipping-policy" className="text-gray-600 hover:text-[#FF6B6C]">Shipping Policy</Link></li>
              <li><Link href="/return-policy" className="text-gray-600 hover:text-[#FF6B6C]">Return & Exchange</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-[#FF6B6C]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-[#FF6B6C]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rangbareilly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
