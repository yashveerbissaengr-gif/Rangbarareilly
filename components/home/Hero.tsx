"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Diamond, TrendingUp, Sparkles, Watch, Star, Crown } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Side: CORE (Cream) */}
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex-1 h-full bg-[#EAE2D3] text-[#2B2622] flex flex-col items-center justify-center overflow-hidden group"
      >
        <Image
          src="/images/core-hero-bg-v5.jpg"
          alt="Core Collection - Minimalist gold chain and ring"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#EAE2D3]/10 z-0"></div>
        <Link href="#core-section" className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
          <Heading as="h1" className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4 text-[#2B2622]">
            glint
          </Heading>
          <Text className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#2B2622]/90 font-semibold mb-8">
            On Core
          </Text>
          
          <Text className="max-w-xs text-sm md:text-base mx-auto mb-8 hidden md:block text-[#2B2622]/90 font-medium drop-shadow-sm">
            The quiet system. Minimalist pieces designed to be lived in, loved, and passed down.
          </Text>
          
          <Button variant="outline" className="border-[#2B2622] text-[#2B2622] hover:bg-[#2B2622] hover:text-[#EAE2D3] transition-colors rounded-none px-8 py-6 tracking-widest text-xs">
            EXPLORE CORE
          </Button>
        </Link>

        {/* Bottom Banner Left */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#5A4F46]/40 backdrop-blur-md py-4 px-6 flex justify-between items-center text-[#EAE2D3] z-20">
          <div className="flex items-center gap-2">
            <Diamond size={18} strokeWidth={1.5} />
            <Text className="text-sm font-medium">Change.</Text>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={18} strokeWidth={1.5} />
            <Text className="text-sm font-medium">Earnings.</Text>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={18} strokeWidth={1.5} />
            <Text className="text-sm font-medium">Growth.</Text>
          </div>
        </div>
      </m.div>

      {/* Right Side: LOUD (Dark) */}
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex-1 h-full bg-[#2B2622] text-[#EAE2D3] flex flex-col items-center justify-center overflow-hidden group"
      >
        <Image
          src="/images/loud-hero-bg-v5.jpg"
          alt="Loud Collection - Statement watch and coral drop hoop"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1A1614]/30 z-0"></div>
        <Link href="#loud-section" className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
          <Heading as="h1" className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4 text-[#EAE2D3]">
            glint
          </Heading>
          <Text className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#EAE2D3]/90 font-semibold mb-8">
            On Loud
          </Text>
          
          <Text className="max-w-xs text-sm md:text-base text-[#EAE2D3] mx-auto mb-8 hidden md:block font-medium drop-shadow-md">
            The vivid family. Statement pieces pulled from our bestselling in-store colorways.
          </Text>
          
          <Button variant="outline" className="border-[#EAE2D3] text-[#EAE2D3] hover:bg-[#EAE2D3] hover:text-[#2B2622] transition-colors rounded-none px-8 py-6 tracking-widest text-xs">
            EXPLORE LOUD
          </Button>
        </Link>

        {/* Bottom Banner Right */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#1A1614]/50 backdrop-blur-md py-4 px-6 flex justify-between items-center text-[#EAE2D3] z-20">
          <div className="flex items-center gap-2">
            <Watch size={18} strokeWidth={1.5} />
            <Text className="text-sm font-medium">Power.</Text>
          </div>
          <div className="flex items-center gap-2">
            <Star size={18} strokeWidth={1.5} />
            <Text className="text-sm font-medium">Presence.</Text>
          </div>
          <div className="flex items-center gap-2">
            <Crown size={18} strokeWidth={1.5} />
            <Text className="text-sm font-medium">Legacy.</Text>
          </div>
        </div>
      </m.div>
    </section>
  );
}
