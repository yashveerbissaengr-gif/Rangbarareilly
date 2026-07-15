"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
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
                Join Our Community
                <br/>
                <span className="text-sm opacity-70 mt-2 block">Get access to special offers, free giveaways, and exclusive updates directly on WhatsApp.</span>
              </Text>
              
              <div className="w-full max-w-sm">
                <a 
                  href="https://wa.me/919220427575" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 font-medium text-sm tracking-widest uppercase transition-all duration-300",
                    isLoud ? "bg-[#C9A227] text-glint-charcoal hover:bg-glint-ivory" : "bg-glint-gold text-glint-charcoal hover:bg-glint-ivory"
                  )}
                >
                  Join WhatsApp Community
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.53-4H14V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className={cn("transition-colors", hoverClass)} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
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
