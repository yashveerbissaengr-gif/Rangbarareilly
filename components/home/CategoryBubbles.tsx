"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Earrings", image: "/dummy-products/earring-1.jpg" },
  { name: "Rings", image: "/dummy-products/ring-1.jpg" },
  { name: "Necklace", image: "/dummy-products/necklace-1.jpg" },
  { name: "Hair Accessories", image: "/dummy-products/hair-1.jpg" },
  { name: "Bracelets", image: "/dummy-products/bracelet-1.jpg" },
];

export const CategoryBubbles = () => {
  return (
    <div className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x justify-start md:justify-center">
          {categories.map((category, index) => (
            <Link href={`/collections/${category.name.toLowerCase()}`} key={index} className="flex flex-col items-center gap-3 shrink-0 snap-center group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-[#FFEAEA] flex items-center justify-center overflow-hidden transition-shadow group-hover:shadow-md"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <span className="text-sm font-semibold text-gray-800 text-center uppercase tracking-wide group-hover:text-[#FF6B6C] transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
