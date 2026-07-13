"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  side?: "left" | "right";
}

export function Drawer({ isOpen, onClose, title, children, side = "right" }: DrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const slideVariants = {
    hidden: { x: side === "right" ? "100%" : "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-glint-charcoal/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "fixed top-0 bottom-0 z-50 w-full max-w-md bg-glint-ivory shadow-2xl overflow-y-auto flex flex-col",
              side === "right" ? "right-0" : "left-0"
            )}
          >
            <div className="flex items-center justify-between p-8 border-b border-glint-charcoal/10">
              <h2 className="text-2xl font-serif text-glint-charcoal">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 transition-transform duration-500 rounded-full text-glint-charcoal hover:rotate-90"
                aria-label="Close"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 p-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
