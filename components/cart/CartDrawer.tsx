"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/lib/context/CartContext";

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, checkoutUrl, isCartLoading } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Indicator */}
            <div className="p-4 bg-[#FFEAEA]">
              <p className="text-sm text-center text-[#8B263E] font-medium">
                {cartTotal >= 599 
                  ? "🎉 You have unlocked Free Shipping!" 
                  : `Add ₹${599 - cartTotal} more to unlock Free Shipping.`}
              </p>
            </div>

            {/* Cart Items */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isCartLoading ? 'opacity-50' : ''}`}>
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  <ShoppingBagIcon className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0">
                      <Image 
                        src={item.product.images[0]?.url || "/placeholder.svg"} 
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-sm text-gray-900 line-clamp-1">{item.product.title}</h3>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 disabled:opacity-50"
                            disabled={isCartLoading}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{item.product.collection}</p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                          <button 
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-1 hover:bg-gray-100 rounded-l-lg transition-colors disabled:opacity-50"
                            disabled={isCartLoading}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-1 hover:bg-gray-100 rounded-r-lg transition-colors disabled:opacity-50"
                            disabled={isCartLoading}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-bold text-sm">₹{item.product.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex justify-between mb-4 text-gray-900 font-bold">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <a 
                  href={checkoutUrl || "#"}
                  className={`block text-center w-full bg-[#FF6B6C] hover:bg-[#ff5254] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm uppercase tracking-wide ${(!checkoutUrl || isCartLoading) ? "opacity-50 pointer-events-none" : ""}`}
                >
                  {isCartLoading ? "Updating..." : "Checkout"}
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Dummy component just for the empty state
const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);
