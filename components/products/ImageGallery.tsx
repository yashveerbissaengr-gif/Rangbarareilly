"use client";

import React from "react";
import Image from "next/image";
import { ProductImage } from "@/types";

interface ImageGalleryProps {
  images: ProductImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto no-scrollbar flex flex-col">
      {/* Mobile Horizontal Scroll */}
      <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar h-[70vh]">
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full h-full relative snap-center">
            <Image
              src={image.url}
              alt={image.alt || "Product image"}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Desktop Vertical Stack (Seamless edge-to-edge) */}
      <div className="hidden lg:flex flex-col w-full min-h-screen">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-screen">
            <Image
              src={image.url}
              alt={image.alt || "Product image"}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
