"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/types";

// Dummy data for cart items
const dummyCartItems = [
  {
    id: "1",
    product: {
      id: "1",
      title: "Heritage Diamond Necklace",
      slug: "heritage-diamond-necklace",
      base_price: 1500,
      images: [],
      is_active: true,
    } as Product,
    quantity: 1,
  },
  {
    id: "2",
    product: {
      id: "2",
      title: "Royal Emerald Ring",
      slug: "royal-emerald-ring",
      base_price: 950,
      images: [],
      is_active: true,
    } as Product,
    quantity: 2,
  },
];

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const total = dummyCartItems.reduce((acc, item) => acc + item.product.base_price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 bg-warm-white shadow-xl flex flex-col">
          {/* Header */}
          <div className="px-4 py-6 border-b border-border sm:px-6 flex items-start justify-between">
            <h2 className="text-xl font-serif text-dark-charcoal uppercase tracking-widest">
              Your Cart
            </h2>
            <button
              onClick={onClose}
              className="text-secondary-text hover:text-brand-red transition-colors"
            >
              <span className="sr-only">Close panel</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-border">
                {dummyCartItems.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 border border-border bg-warm-ivory rounded-md overflow-hidden relative">
                      {item.product.images[0] ? (
                        <Image
                          src={item.product.images[0].url}
                          alt={item.product.images[0].alt_text || item.product.title}
                          fill
                          className="object-cover object-center"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-secondary-text">No Image</div>
                      )}
                    </div>

                    <div className="ml-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between text-base font-medium text-dark-charcoal">
                          <h3 className="font-serif hover:text-brand-red line-clamp-2">
                            <Link href={`/products/${item.product.slug}`} onClick={onClose}>
                              {item.product.title}
                            </Link>
                          </h3>
                          <p className="ml-4">${(item.product.base_price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-secondary-text uppercase text-[10px] tracking-wider">
                          Yellow Gold
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center border border-border">
                          <button className="px-3 py-1 text-dark-charcoal hover:bg-warm-ivory transition-colors">-</button>
                          <span className="px-3 py-1 border-x border-border">{item.quantity}</span>
                          <button className="px-3 py-1 text-dark-charcoal hover:bg-warm-ivory transition-colors">+</button>
                        </div>
                        <button type="button" className="font-medium text-secondary-text hover:text-brand-red transition-colors text-xs uppercase tracking-widest border-b border-transparent hover:border-brand-red pb-0.5">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border px-4 py-6 sm:px-6 bg-white">
            <div className="flex justify-between text-base font-medium text-dark-charcoal mb-4">
              <p className="uppercase tracking-widest text-sm">Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-secondary-text mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/checkout"
                onClick={onClose}
                className="flex items-center justify-center px-6 py-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-brand-red hover:bg-red-800 transition-colors uppercase tracking-widest"
              >
                Checkout
              </Link>
              <Link
                href="/cart"
                onClick={onClose}
                className="flex items-center justify-center px-6 py-4 border border-dark-charcoal rounded-xl text-base font-medium text-dark-charcoal bg-transparent hover:bg-dark-charcoal hover:text-white transition-colors uppercase tracking-widest"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
