"use client";

import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";

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
        <Link href="#core-section" className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
          <Heading as="h1" className="text-5xl md:text-7xl font-serif tracking-tight mb-4">
            gl<span className="text-[#C9A227]">✦</span>nt
          </Heading>
          <Text className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#2B2622]/60 font-semibold mb-8">
            On Core
          </Text>
          
          <Text className="max-w-xs text-sm md:text-base mx-auto mb-8 hidden md:block">
            The quiet system. Minimalist pieces designed to be lived in, loved, and passed down.
          </Text>
          
          <Button variant="outline" className="border-[#2B2622] text-[#2B2622] hover:bg-[#2B2622] hover:text-[#EAE2D3] transition-colors">
            Explore Core
          </Button>
        </Link>
      </m.div>

      {/* Right Side: LOUD (Dark) */}
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex-1 h-full bg-[#2B2622] text-[#EAE2D3] flex flex-col items-center justify-center overflow-hidden group"
      >
        <Link href="#loud-section" className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
          <Heading as="h1" className="text-5xl md:text-7xl font-serif tracking-tight mb-4 text-[#EAE2D3]">
            gl<span className="text-[#C9A227]">✦</span>nt
          </Heading>
          <Text className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#EAE2D3]/60 font-semibold mb-8">
            On Loud
          </Text>
          
          <Text className="max-w-xs text-sm md:text-base text-[#EAE2D3] mx-auto mb-8 hidden md:block">
            The vivid family. Statement pieces pulled from our bestselling in-store colorways.
          </Text>
          
          <Button variant="outline" className="border-[#EAE2D3] text-[#EAE2D3] hover:bg-[#EAE2D3] hover:text-[#2B2622] transition-colors">
            Explore Loud
          </Button>
        </Link>
      </m.div>
    </section>
  );
}
