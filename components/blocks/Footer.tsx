"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Youtube, Twitter, Linkedin, ChevronDown } from "lucide-react";
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
  const mutedTextClass = "text-glint-ivory/70";
  const hoverClass = isLoud ? "hover:text-[#C9A227]" : "hover:text-glint-gold";
  const borderClass = "border-glint-ivory/10";
  const basePath = "/shop";

  return (
    <footer className={cn("w-full pt-20 pb-12 px-6 md:px-12 lg:px-24", bgClass, textClass)}>
      <div className="max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left Column: Brand, Newsletter, Socials, Contact (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-12 pr-0 lg:pr-12 lg:border-r border-glint-ivory/10">
            <div>
              <span className="font-serif font-bold text-4xl md:text-5xl block mb-6 tracking-tight">
                glint
              </span>
              <Text className="text-glint-ivory/80 max-w-sm mb-6">
                Sign Up And Save
                <br/>
                <span className="text-sm opacity-70 mt-2 block">Subscribe to get special offers, free giveaways and once-in-a-lifetime deals.</span>
              </Text>
              
              <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
                <div className="relative border-b border-glint-ivory/30 pb-2 flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent border-none text-glint-ivory placeholder:text-glint-ivory/40 focus:ring-0 focus:outline-none p-0 text-sm"
                  />
                  <button 
                    type="submit" 
                    className={cn("transition-colors ml-2", textClass, hoverClass)}
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="Instagram"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="Facebook"><Facebook size={20} strokeWidth={1.5} /></a>
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="YouTube"><Youtube size={20} strokeWidth={1.5} /></a>
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="Twitter"><Twitter size={20} strokeWidth={1.5} /></a>
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="LinkedIn"><Linkedin size={20} strokeWidth={1.5} /></a>
            </div>

            {/* Contact Us */}
            <div>
              <Text className="text-xs uppercase tracking-widest mb-4 font-semibold text-glint-gold">
                CONTACT US
              </Text>
              <div className="space-y-3 text-sm opacity-80">
                <p>Call Us at: +91 92204 27575</p>
                <p>queries@glint.co.in</p>
                <p><a href="#" className="underline underline-offset-4 hover:text-glint-gold transition-colors">Whatsapp Us</a></p>
                <p className="max-w-[250px] leading-relaxed">Pamposh Enclave, GK-1 Delhi - 110048</p>
              </div>
            </div>
          </div>

          {/* Right Columns (Spans 7 cols total) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Menu */}
            <div>
              <Text className={cn("text-xs uppercase tracking-widest mb-6 font-semibold", mutedTextClass)}>
                MENU
              </Text>
              <ul className="space-y-3 text-sm">
                <li><Link href={`${basePath}/all`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Jewellery</Link></li>
                <li><Link href={`${basePath}/watches`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Watches</Link></li>
                <li><Link href={`${basePath}/studs`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Studs</Link></li>
                <li><Link href={`${basePath}/earrings`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Earrings</Link></li>
                <li><Link href={`${basePath}/rings`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Rings</Link></li>
                <li><Link href={`${basePath}/necklaces`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Necklaces</Link></li>
                <li><Link href={`${basePath}/bracelets`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Bracelets</Link></li>
                <li><Link href="#" className={cn("transition-colors", mutedTextClass, hoverClass)}>Gift Card</Link></li>
              </ul>
            </div>

            {/* Reviews and Deals */}
            <div>
              <Text className={cn("text-xs uppercase tracking-widest mb-6 font-semibold", mutedTextClass)}>
                REVIEWS AND DEALS
              </Text>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className={cn("transition-colors", mutedTextClass, hoverClass)}>Offers and Deals</Link></li>
                <li><Link href="#" className={cn("transition-colors", mutedTextClass, hoverClass)}>Customer Reviews</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <Text className={cn("text-xs uppercase tracking-widest mb-6 font-semibold", mutedTextClass)}>
                QUICK LINKS
              </Text>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className={cn("transition-colors", mutedTextClass, hoverClass)}>About us</Link></li>
                <li><Link href="/privacy" className={cn("transition-colors", mutedTextClass, hoverClass)}>Privacy Policy</Link></li>
                <li><Link href="/terms" className={cn("transition-colors", mutedTextClass, hoverClass)}>Terms of Service</Link></li>
                <li><Link href="/returns" className={cn("transition-colors", mutedTextClass, hoverClass)}>Return & Refund Policy</Link></li>
                <li><Link href="/faq" className={cn("transition-colors", mutedTextClass, hoverClass)}>FAQ'S</Link></li>
                <li><Link href="/shipping" className={cn("transition-colors", mutedTextClass, hoverClass)}>Shipping Policy</Link></li>
                <li><Link href="/track-order" className={cn("transition-colors font-medium text-glint-gold", hoverClass)}>Track Order</Link></li>
                <li><Link href="/careers" className={cn("transition-colors", mutedTextClass, hoverClass)}>Work with GLINT</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Accordions for Performance (Zero JS approach via HTML5 details) */}
        <div className="border-t border-glint-ivory/10">
          <details className="group border-b border-glint-ivory/10">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-sm tracking-wide uppercase transition-colors hover:text-glint-gold">
              <span>Jewellery By Colour</span>
              <span className="transition group-open:rotate-180">
                <ChevronDown size={18} />
              </span>
            </summary>
            <div className="text-sm opacity-70 pb-5 pt-2 animate-in slide-in-from-top-2 duration-300">
              <ul className="flex flex-wrap gap-4">
                <li><Link href="#" className={hoverClass}>Gold</Link></li>
                <li><Link href="#" className={hoverClass}>Silver</Link></li>
                <li><Link href="#" className={hoverClass}>Rose Gold</Link></li>
                <li><Link href="#" className={hoverClass}>Black</Link></li>
              </ul>
            </div>
          </details>

          <details className="group border-b border-glint-ivory/10">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-sm tracking-wide uppercase transition-colors hover:text-glint-gold">
              <span>Shop By Occasion</span>
              <span className="transition group-open:rotate-180">
                <ChevronDown size={18} />
              </span>
            </summary>
            <div className="text-sm opacity-70 pb-5 pt-2 animate-in slide-in-from-top-2 duration-300">
              <ul className="flex flex-wrap gap-4">
                <li><Link href="#" className={hoverClass}>Everyday Wear</Link></li>
                <li><Link href="#" className={hoverClass}>Office Wear</Link></li>
                <li><Link href="#" className={hoverClass}>Party Wear</Link></li>
                <li><Link href="#" className={hoverClass}>Weddings</Link></li>
              </ul>
            </div>
          </details>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Text className="text-xs text-glint-ivory/40">
            © {new Date().getFullYear()} glint. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
}
