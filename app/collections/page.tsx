import React from "react";
import Link from "next/link";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Navigation } from "@/components/blocks/Navigation";

export const metadata = {
  title: "Collections | GLINT",
  description: "Explore the GLINT Core and Loud collections.",
};

export default function CollectionsHubPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navigation theme="core" />
      
      <section className="w-full min-h-screen flex flex-col md:flex-row pt-20">
        {/* Left Side: CORE (Cream) */}
        <div className="relative flex-1 min-h-[50vh] md:min-h-full bg-[#EAE2D3] text-[#2B2622] flex flex-col items-center justify-center overflow-hidden group">
          <Link href="/collections/core" className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8 transition-transform duration-500 group-hover:scale-105">
            <Heading as="h1" className="text-4xl md:text-6xl font-serif tracking-tight mb-4">
              Core
            </Heading>
            <Text className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#2B2622]/60 font-semibold mb-8">
              The Essentials
            </Text>
            
            <Text className="max-w-xs text-sm md:text-base mx-auto mb-8 hidden md:block">
              Minimalist pieces designed to be lived in, loved, and passed down. The quiet system.
            </Text>
            
            <Button variant="outline" className="border-[#2B2622] text-[#2B2622] group-hover:bg-[#2B2622] group-hover:text-[#EAE2D3] transition-colors">
              Shop Core
            </Button>
          </Link>
        </div>

        {/* Right Side: LOUD (Dark) */}
        <div className="relative flex-1 min-h-[50vh] md:min-h-full bg-[#2B2622] text-[#EAE2D3] flex flex-col items-center justify-center overflow-hidden group">
          <Link href="/collections/loud" className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-8 transition-transform duration-500 group-hover:scale-105">
            <Heading as="h1" className="text-4xl md:text-6xl font-serif tracking-tight mb-4 text-[#EAE2D3]">
              Loud
            </Heading>
            <Text className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#EAE2D3]/60 font-semibold mb-8">
              The Statement
            </Text>
            
            <Text className="max-w-xs text-sm md:text-base text-[#EAE2D3] mx-auto mb-8 hidden md:block">
              The vivid family. Statement pieces pulled from our bestselling in-store colorways.
            </Text>
            
            <Button variant="outline" className="border-[#EAE2D3] text-[#EAE2D3] group-hover:bg-[#EAE2D3] group-hover:text-[#2B2622] transition-colors">
              Shop Loud
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
