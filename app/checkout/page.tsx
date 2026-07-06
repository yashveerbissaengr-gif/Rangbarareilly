"use client";

import { PageTransition } from "@/components/animations/PageTransition";

export default function CheckoutPage() {
  return (
    <PageTransition>
      <div className="bg-warm-white min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif text-dark-charcoal uppercase tracking-widest mb-10 text-center">
            Checkout
          </h1>

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            {/* Checkout Forms */}
            <div className="lg:col-span-7">
              <form className="space-y-10">
                {/* Contact Information */}
                <div>
                  <h2 className="text-lg font-serif text-dark-charcoal uppercase tracking-widest border-b border-border pb-2 mb-6">
                    1. Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-charcoal">Email address</label>
                      <div className="mt-1">
                        <input type="email" id="email" name="email" className="block w-full border-border bg-white py-3 px-4 focus:ring-brand-red focus:border-brand-red sm:text-sm" placeholder="you@example.com" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <div>
                  <h2 className="text-lg font-serif text-dark-charcoal uppercase tracking-widest border-b border-border pb-2 mb-6">
                    2. Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-dark-charcoal">First name</label>
                      <div className="mt-1">
                        <input type="text" id="first-name" name="first-name" className="block w-full border-border bg-white py-3 px-4 focus:ring-brand-red focus:border-brand-red sm:text-sm" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-dark-charcoal">Last name</label>
                      <div className="mt-1">
                        <input type="text" id="last-name" name="last-name" className="block w-full border-border bg-white py-3 px-4 focus:ring-brand-red focus:border-brand-red sm:text-sm" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-dark-charcoal">Address</label>
                      <div className="mt-1">
                        <input type="text" id="address" name="address" className="block w-full border-border bg-white py-3 px-4 focus:ring-brand-red focus:border-brand-red sm:text-sm" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-dark-charcoal">City</label>
                      <div className="mt-1">
                        <input type="text" id="city" name="city" className="block w-full border-border bg-white py-3 px-4 focus:ring-brand-red focus:border-brand-red sm:text-sm" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="postal-code" className="block text-sm font-medium text-dark-charcoal">Postal code</label>
                      <div className="mt-1">
                        <input type="text" id="postal-code" name="postal-code" className="block w-full border-border bg-white py-3 px-4 focus:ring-brand-red focus:border-brand-red sm:text-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h2 className="text-lg font-serif text-dark-charcoal uppercase tracking-widest border-b border-border pb-2 mb-6">
                    3. Payment
                  </h2>
                  <div className="bg-white border border-border p-6 text-center text-secondary-text">
                    Razorpay Integration Placeholder
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <button
                    type="submit"
                    className="w-full bg-brand-red text-white py-4 px-8 flex items-center justify-center text-base font-medium hover:bg-red-800 transition-colors uppercase tracking-widest rounded-xl shadow-sm"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary Panel */}
            <div className="lg:col-span-5 mt-16 lg:mt-0">
              <div className="bg-white rounded-xl border border-border shadow-sm p-6 sm:p-8 sticky top-24">
                <h2 className="text-lg font-serif text-dark-charcoal uppercase tracking-widest mb-6 border-b border-border pb-4">
                  Order Summary
                </h2>

                <ul className="divide-y divide-border mb-6">
                  {/* Dummy Item */}
                  <li className="py-4 flex">
                    <div className="flex-shrink-0 w-20 h-20 border border-border bg-warm-ivory rounded-md overflow-hidden relative">
                       <div className="absolute inset-0 flex items-center justify-center text-[10px] text-secondary-text">No Image</div>
                    </div>
                    <div className="ml-4 flex-1 flex flex-col justify-center">
                      <div className="flex justify-between text-sm font-medium text-dark-charcoal">
                        <h3 className="font-serif">Heritage Diamond Necklace</h3>
                        <p>$1500.00</p>
                      </div>
                      <p className="text-xs text-secondary-text uppercase tracking-wider mt-1">Qty: 1</p>
                    </div>
                  </li>
                </ul>

                <dl className="text-sm divide-y divide-border border-t border-border">
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-secondary-text">Subtotal</dt>
                    <dd className="font-medium text-dark-charcoal">$1500.00</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-secondary-text">Shipping</dt>
                    <dd className="font-medium text-dark-charcoal">Free</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-secondary-text">Tax</dt>
                    <dd className="font-medium text-dark-charcoal">$150.00</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-dark-charcoal uppercase tracking-widest">Total</dt>
                    <dd className="text-lg font-medium text-dark-charcoal">$1650.00</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
