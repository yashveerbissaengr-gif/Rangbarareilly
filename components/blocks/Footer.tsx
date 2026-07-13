"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Text } from "../ui/Typography";
import { cn } from "@/lib/utils";

export function Footer({ theme = "core" }: { theme?: "core" | "loud" }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  const isLoud = theme === "loud";
  const bgClass = isLoud ? "bg-[#1A1715]" : "bg-glint-charcoal";
  const textClass = "text-glint-ivory";
  const mutedTextClass = "text-glint-ivory/60";
  const hoverClass = isLoud ? "hover:text-[#C9A227]" : "hover:text-glint-gold";
  const logoText = isLoud ? "GLINT LOUD" : "GLINT CORE";
  const basePath = isLoud ? "/loud" : "/core";

  return (
    <footer className={cn("w-full pt-24 pb-12 px-6 md:px-12 lg:px-24", bgClass, textClass)}>
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
        
        {/* Brand & Newsletter */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <span className="font-serif text-3xl md:text-4xl block mb-6 tracking-[0.2em] uppercase">
              {logoText}
            </span>
            <Text className="text-glint-ivory/80 max-w-sm mb-12">
              {isLoud 
                ? "Statement pieces designed to turn heads and start conversations."
                : "Small sparks. Everyday. Fine jewelry designed to be lived in, loved, and passed down."}
            </Text>
          </div>
          
          <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
            <Text className={cn("text-xs uppercase tracking-widest mb-3", mutedTextClass)}>
              Join Our Newsletter
            </Text>
            <div className="relative border-b border-glint-ivory/30 pb-2 flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-none text-glint-ivory placeholder:text-glint-ivory/40 focus:ring-0 focus:outline-none p-0"
              />
              <button 
                type="submit" 
                className={cn("transition-colors", textClass, hoverClass)}
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <Text className={cn("text-xs uppercase tracking-widest mb-6", mutedTextClass)}>
            Shop
          </Text>
          <ul className="space-y-4">
            <li>
              <Link href={`${basePath}/collections/all`} className={cn("transition-colors", mutedTextClass, hoverClass)}>
                All Collections
              </Link>
            </li>
            <li>
              <Link href={`${basePath}/collections/necklaces`} className={cn("transition-colors", mutedTextClass, hoverClass)}>
                Necklaces
              </Link>
            </li>
            <li>
              <Link href={`${basePath}/collections/rings`} className={cn("transition-colors", mutedTextClass, hoverClass)}>
                Rings
              </Link>
            </li>
            <li>
              <Link href={`${basePath}/collections/earrings`} className={cn("transition-colors", mutedTextClass, hoverClass)}>
                Earrings
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <Text className={cn("text-xs uppercase tracking-widest mb-6", mutedTextClass)}>
            Support
          </Text>
          <ul className="space-y-4">
            <li>
              <Link href={`${basePath}/about`} className={cn("transition-colors", mutedTextClass, hoverClass)}>
                Our Story
              </Link>
            </li>
            <li>
              <Link href={`${basePath}/contact`} className={cn("transition-colors", mutedTextClass, hoverClass)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={`${basePath}/faq`} className={cn("transition-colors", mutedTextClass, hoverClass)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href={`${basePath}/shipping-returns`} className={cn("transition-colors", mutedTextClass, hoverClass)}>
                Shipping & Returns
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto border-t border-glint-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Text className="text-xs text-glint-ivory/40">
          © {new Date().getFullYear()} {logoText}. All rights reserved.
        </Text>
        
        <div className={cn("flex items-center space-x-6", mutedTextClass)}>
          <Link href="#" className={cn("text-sm transition-colors", hoverClass)} aria-label="Instagram">
            Instagram
          </Link>
          <Link href="#" className={cn("text-sm transition-colors", hoverClass)} aria-label="Twitter">
            Twitter
          </Link>
          <Link href="#" className={cn("text-sm transition-colors", hoverClass)} aria-label="Facebook">
            Facebook
          </Link>
        </div>
        
        <div className="flex space-x-6">
          <Link href={`${basePath}/privacy`} className={cn("text-xs transition-colors text-glint-ivory/40", hoverClass)}>
            Privacy Policy
          </Link>
          <Link href={`${basePath}/terms`} className={cn("text-xs transition-colors text-glint-ivory/40", hoverClass)}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
