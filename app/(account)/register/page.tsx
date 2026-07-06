"use client";

import Link from "next/link";
import { PageTransition } from "@/components/animations/PageTransition";

export default function RegisterPage() {
  return (
    <PageTransition>
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border">
          <div>
            <h2 className="text-center text-3xl font-serif font-bold text-dark-charcoal uppercase tracking-widest">
              Create Account
            </h2>
            <p className="mt-2 text-center text-sm text-secondary-text">
              Join the world of Rangbareilly
            </p>
          </div>
          
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4 rounded-md shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="sr-only">First name</label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-border placeholder-secondary-text text-dark-charcoal focus:outline-none focus:ring-brand-red focus:border-brand-red focus:z-10 sm:text-sm bg-warm-white/50"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">Last name</label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-border placeholder-secondary-text text-dark-charcoal focus:outline-none focus:ring-brand-red focus:border-brand-red focus:z-10 sm:text-sm bg-warm-white/50"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-border placeholder-secondary-text text-dark-charcoal focus:outline-none focus:ring-brand-red focus:border-brand-red focus:z-10 sm:text-sm bg-warm-white/50"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-border placeholder-secondary-text text-dark-charcoal focus:outline-none focus:ring-brand-red focus:border-brand-red focus:z-10 sm:text-sm bg-warm-white/50"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-dark-charcoal hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-colors uppercase tracking-wider"
              >
                Create Account
              </button>
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-secondary-text">Or register with</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="w-full flex justify-center items-center py-3 px-4 border border-border rounded-xl shadow-sm bg-white text-sm font-medium text-dark-charcoal hover:bg-warm-ivory transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </button>
              </div>
            </div>
            
            <p className="mt-8 text-center text-sm text-secondary-text">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-dark-charcoal hover:text-brand-red uppercase tracking-wider ml-1 border-b border-dark-charcoal hover:border-brand-red pb-0.5 transition-colors">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
