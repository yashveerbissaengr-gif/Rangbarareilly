"use client";

import Link from "next/link";
import Image from "next/image";
import { PageTransition } from "@/components/animations/PageTransition";
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

export default function CartPage() {
  const subtotal = dummyCartItems.reduce((acc, item) => acc + item.product.base_price * item.quantity, 0);

  return (
    <PageTransition>
      <div className="bg-warm-white min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif text-dark-charcoal uppercase tracking-widest mb-10 text-center">
            Shopping Cart
          </h1>

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="border-t border-border">
                <ul className="divide-y divide-border">
                  {dummyCartItems.map((item) => (
                    <li key={item.id} className="py-8 flex">
                      <div className="flex-shrink-0 w-32 h-32 border border-border bg-warm-ivory rounded-md overflow-hidden relative">
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

                      <div className="ml-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between text-lg font-medium text-dark-charcoal">
                            <h3 className="font-serif hover:text-brand-red">
                              <Link href={`/products/${item.product.slug}`}>
                                {item.product.title}
                              </Link>
                            </h3>
                            <p className="ml-4">${(item.product.base_price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-secondary-text uppercase tracking-wider text-[11px]">
                            Yellow Gold
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-4">
                          <div className="flex items-center border border-border">
                            <button className="px-4 py-2 text-dark-charcoal hover:bg-warm-ivory transition-colors">-</button>
                            <span className="px-4 py-2 border-x border-border">{item.quantity}</span>
                            <button className="px-4 py-2 text-dark-charcoal hover:bg-warm-ivory transition-colors">+</button>
                          </div>
                          <button type="button" className="font-medium text-secondary-text hover:text-brand-red transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-brand-red pb-0.5">
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 mt-16 lg:mt-0">
              <div className="bg-white rounded-xl border border-border shadow-sm p-6 sm:p-8">
                <h2 className="text-lg font-serif text-dark-charcoal uppercase tracking-widest mb-6 border-b border-border pb-4">
                  Order Summary
                </h2>

                <div className="flow-root">
                  <dl className="-my-4 text-sm divide-y divide-border">
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-secondary-text">Subtotal</dt>
                      <dd className="font-medium text-dark-charcoal">${subtotal.toFixed(2)}</dd>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-secondary-text">Shipping</dt>
                      <dd className="font-medium text-dark-charcoal">Calculated at checkout</dd>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-secondary-text">Tax</dt>
                      <dd className="font-medium text-dark-charcoal">Calculated at checkout</dd>
                    </div>
                    <div className="py-4 flex items-center justify-between">
                      <dt className="text-base font-medium text-dark-charcoal uppercase tracking-widest">Total</dt>
                      <dd className="text-lg font-medium text-dark-charcoal">${subtotal.toFixed(2)}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-8">
                  <Link
                    href="/checkout"
                    className="w-full bg-brand-red text-white py-4 px-8 flex items-center justify-center text-base font-medium rounded-xl hover:bg-red-800 transition-colors uppercase tracking-widest"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
