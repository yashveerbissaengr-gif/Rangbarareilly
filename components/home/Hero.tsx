"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        <Image
          src="/images/core-hero-bg.jpg"
          alt="Core Collection - Minimalist gold chain and ring"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#EAE2D3]/40 z-0"></div>
        <Link href="#core-section" className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
          <Heading as="h1" className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4">
            glint
          </Heading>
          <Text className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#2B2622]/80 font-semibold mb-8">
            On Core
          </Text>
          
          <Text className="max-w-xs text-sm md:text-base mx-auto mb-8 hidden md:block text-[#2B2622]/90 font-medium drop-shadow-sm">
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
        <Image
          src="/images/loud-hero-bg.jpg"
          alt="Loud Collection - Statement watch and coral drop hoop"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#2B2622]/50 z-0"></div>
        <Link href="#loud-section" className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8">
          <Heading as="h1" className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4 text-[#EAE2D3] drop-shadow-lg">
            glint
          </Heading>
          <Text className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#EAE2D3]/90 font-semibold mb-8 drop-shadow-md">
            On Loud
          </Text>
          
          <Text className="max-w-xs text-sm md:text-base text-[#EAE2D3] mx-auto mb-8 hidden md:block font-medium drop-shadow-md">
            The vivid family. Statement pieces pulled from our bestselling in-store colorways.
          </Text>
          
          <Button variant="outline" className="border-[#EAE2D3] text-[#EAE2D3] hover:bg-[#EAE2D3] hover:text-[#2B2622] transition-colors shadow-lg backdrop-blur-sm">
            Explore Loud
          </Button>
        </Link>
      </m.div>
    </section>
  );
}
