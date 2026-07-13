"use client";

import React, { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import { CartLineItem } from "./CartLineItem";
import { createCheckout } from "@/lib/shopify";

export function CartDrawer() {
  const { isDrawerOpen, closeDrawer, items, subtotal } = useCart();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  const handleCheckout = async () => {
    // In a real app, this redirects to the Shopify checkout URL
    const checkoutUrl = await createCheckout(items);
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      alert("Checkout simulation. In production, this directs to Shopify.");
    }
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-glint-charcoal/40 z-50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer */}
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-glint-charcoal/10">
              <Heading as="h2" className="text-xl text-glint-charcoal">
                Your Cart
              </Heading>
              <button
                onClick={closeDrawer}
                className="text-glint-charcoal hover:text-glint-gold transition-colors p-2 -mr-2"
                aria-label="Close cart"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-2 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <Text className="text-glint-charcoal/60">
                    Your cart is currently empty.
                  </Text>
                  <Button variant="outline" onClick={closeDrawer}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col">
                  {items.map((item) => (
                    <CartLineItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-glint-charcoal/10 px-6 py-6 bg-glint-ivory/30">
                <div className="flex justify-between items-center mb-6">
                  <Text className="text-glint-charcoal uppercase tracking-widest text-sm">
                    Subtotal
                  </Text>
                  <Text className="text-glint-charcoal text-lg font-medium">
                    ₹{subtotal}
                  </Text>
                </div>
                <Text className="text-glint-charcoal/60 text-xs mb-6 text-center">
                  Shipping & taxes calculated at checkout
                </Text>
                <Button onClick={handleCheckout} className="w-full h-14">
                  Checkout
                </Button>
              </div>
            )}
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
