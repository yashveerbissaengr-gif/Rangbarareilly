"use client";

import React from "react";
import Image from "next/image";

export const HeroBanner = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] bg-[#FFEAEA] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Banner"
        fill
        className="object-cover object-center opacity-80"
        priority
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/10">
        <h1 className="font-accent text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-md transform -rotate-2 mb-4">
          HAPPY Mother&apos;s Day
        </h1>
        <p className="font-sans text-sm md:text-lg text-white max-w-xl mx-auto uppercase tracking-widest font-semibold drop-shadow-sm mb-8">
          gift something to the person who gave you this life
        </p>
        <button className="bg-[#FF6B6C] hover:bg-[#ff5254] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-transform hover:scale-105 shadow-lg">
          Shop the Collection
        </button>
      </div>
    </div>
  );
};
