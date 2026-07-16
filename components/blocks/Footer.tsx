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
  const bgClass = isLoud ? "bg-[#1A1715]" : "bg-[#ffffff]";
  const textClass = isLoud ? "text-glint-ivory" : "text-glint-charcoal";
  const mutedTextClass = isLoud ? "text-glint-ivory/70" : "text-glint-charcoal/70";
  const hoverClass = isLoud ? "hover:text-[#C9A227]" : "hover:text-[#C9A227] font-medium";
  const borderClass = isLoud ? "border-glint-ivory/10" : "border-[#C9A227]/20";
  const accentTextClass = isLoud ? "text-glint-gold" : "text-[#8A7336]"; // Darker gold for light bg
  const basePath = "/shop";

  return (
    <footer className={cn("w-full py-10 px-6 md:px-12 lg:px-24 font-sans border-t", borderClass, bgClass, textClass)}>
      <div className="max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Left Column: Brand, Newsletter, Socials, Contact (Spans 5 cols) */}
          <div className={cn("lg:col-span-5 flex flex-col space-y-8 pr-0 lg:pr-12 lg:border-r", borderClass)}>
            <div>
              <span className="font-serif font-bold text-3xl block mb-4 tracking-tight">
                gl<span className="text-[0.55em] inline-block align-middle transform -translate-y-[15%] mx-[1px]">✧</span>nt
              </span>
              <Text className={cn("max-w-sm mb-4 text-sm", mutedTextClass)}>
                Join Our Community
                <br/>
                <span className="text-xs opacity-70 mt-1 block">Get access to special offers, free giveaways, and exclusive updates directly on WhatsApp.</span>
              </Text>
              
              <div className="w-full max-w-sm">
                <a 
                  href="https://wa.me/919588669056" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 font-medium text-xs tracking-widest uppercase transition-all duration-300",
                    isLoud ? "bg-[#C9A227] text-glint-charcoal hover:bg-glint-ivory" : "bg-[#C9A227] text-white hover:bg-[#8A7336] shadow-sm shadow-[#C9A227]/20"
                  )}
                >
                  Join WhatsApp Community
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/rangbareilly/" target="_blank" rel="noopener noreferrer" className={cn("transition-colors", hoverClass)} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.justdial.com/Nagpur/Rangbareilly-Fashion-Jewellery-Sitabuldi/0712PX712-X712-250826171653-A7Z9_BZDET" target="_blank" rel="noopener noreferrer" className={cn("transition-colors flex items-center justify-center", hoverClass)} aria-label="JustDial">
                {/* Custom JustDial stylized icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 6v8c0 2 1 3 3 3s3-1 3-3V6" />
                  <path d="M16 8v8c0 1.5-1 2.5-2.5 2.5S11 17.5 11 16" />
                  <circle cx="12" cy="12" r="10" />
                  <text x="12" y="16" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">Jd</text>
                </svg>
              </a>
            </div>

            {/* Contact Us */}
            <div>
              <Text className={cn("text-xs uppercase tracking-widest mb-3 font-semibold", accentTextClass)}>
                CONTACT US
              </Text>
              <div className="space-y-1.5 text-sm opacity-80">
                <p>Call Us at: +91 95886 69056</p>
                <p>queries@glint.co.in</p>
                <p><a href="https://wa.me/919588669056" target="_blank" rel="noopener noreferrer" className={cn("underline underline-offset-4 transition-colors", hoverClass)}>Whatsapp Us</a></p>
                <p className="max-w-[250px] leading-relaxed pt-1">Ground and First Floor, Modi Number 2, Sitabuldi, Nagpur, Maharashtra 440012</p>
              </div>
            </div>
          </div>

          {/* Right Columns (Spans 7 cols total) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Menu */}
            <div>
              <Text className={cn("text-xs uppercase tracking-widest mb-4 font-semibold", mutedTextClass)}>
                MENU
              </Text>
              <ul className="space-y-2.5 text-sm">
                <li><Link href={`${basePath}/all`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Jewellery</Link></li>
                <li><Link href={`${basePath}/watches`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Watches</Link></li>
                <li><Link href={`${basePath}/studs`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Studs</Link></li>
                <li><Link href={`${basePath}/earrings`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Earrings</Link></li>
                <li><Link href={`${basePath}/rings`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Rings</Link></li>
                <li><Link href={`${basePath}/necklaces`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Necklaces</Link></li>
                <li><Link href={`${basePath}/bracelets`} className={cn("transition-colors", mutedTextClass, hoverClass)}>Bracelets</Link></li>
              </ul>
            </div>

            {/* Reviews and Deals */}
            <div>
              <Text className={cn("text-xs uppercase tracking-widest mb-4 font-semibold", mutedTextClass)}>
                REVIEWS AND DEALS
              </Text>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="#" className={cn("transition-colors", mutedTextClass, hoverClass)}>Offers and Deals</Link></li>
                <li><Link href="#" className={cn("transition-colors", mutedTextClass, hoverClass)}>Customer Reviews</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <Text className={cn("text-xs uppercase tracking-widest mb-4 font-semibold", mutedTextClass)}>
                QUICK LINKS
              </Text>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/about" className={cn("transition-colors", mutedTextClass, hoverClass)}>About us</Link></li>
                <li><Link href="/privacy" className={cn("transition-colors", mutedTextClass, hoverClass)}>Privacy Policy</Link></li>
                <li><Link href="/terms" className={cn("transition-colors", mutedTextClass, hoverClass)}>Terms of Service</Link></li>
                <li><Link href="/returns" className={cn("transition-colors", mutedTextClass, hoverClass)}>Return & Refund Policy</Link></li>
                <li><Link href="/faq" className={cn("transition-colors", mutedTextClass, hoverClass)}>FAQs</Link></li>
                <li><Link href="/shipping" className={cn("transition-colors", mutedTextClass, hoverClass)}>Shipping Policy</Link></li>
                <li><Link href="/track-order" className={cn("transition-colors font-medium", hoverClass, accentTextClass)}>Track Order</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Accordions removed as per request */}

        {/* Bottom Bar */}
        <div className="pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Text className={cn("text-xs", mutedTextClass)}>
            © {new Date().getFullYear()} glint. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
}
