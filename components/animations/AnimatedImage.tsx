"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  animation?: "fade" | "slide-up" | "zoom-out" | "pan";
  delay?: number;
}

export function AnimatedImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  animation = "slide-up",
  delay = 0,
}: AnimatedImageProps) {
  // Define animation variants based on the requested animation type
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8, delay, ease: "easeOut" } },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: "easeOut" } },
    },
    "zoom-out": {
      hidden: { opacity: 0, scale: 1.1 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1, delay, ease: "easeOut" } },
    },
    pan: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration: 1, delay, ease: "easeOut" } },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[animation]}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
    </motion.div>
  );
}
