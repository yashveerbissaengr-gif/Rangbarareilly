"use client";

import { PageTransition } from "@/components/animations/PageTransition";

export default function AdminDashboardPage() {
  return (
    <PageTransition>
      <div className="bg-warm-white min-h-screen">
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-dark-charcoal text-white hidden md:flex flex-col">
            <div className="p-6 border-b border-white/10">
              <h1 className="text-xl font-serif uppercase tracking-widest">RB Admin</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              <a href="#" className="block px-4 py-2 bg-brand-red text-white rounded-md text-sm uppercase tracking-widest">Dashboard</a>
              <a href="#" className="block px-4 py-2 text-white/70 hover:bg-white/10 hover:text-white rounded-md text-sm uppercase tracking-widest transition-colors">Orders</a>
              <a href="#" className="block px-4 py-2 text-white/70 hover:bg-white/10 hover:text-white rounded-md text-sm uppercase tracking-widest transition-colors">Products</a>
              <a href="#" className="block px-4 py-2 text-white/70 hover:bg-white/10 hover:text-white rounded-md text-sm uppercase tracking-widest transition-colors">Customers</a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-warm-white">
            <div className="p-8">
              <h2 className="text-3xl font-serif text-dark-charcoal uppercase tracking-widest mb-8">Dashboard Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stat Cards */}
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-sm text-secondary-text uppercase tracking-widest mb-2">Total Revenue</h3>
                  <p className="text-3xl font-serif text-dark-charcoal">$45,231.00</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-sm text-secondary-text uppercase tracking-widest mb-2">Total Orders</h3>
                  <p className="text-3xl font-serif text-dark-charcoal">124</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-sm text-secondary-text uppercase tracking-widest mb-2">Active Products</h3>
                  <p className="text-3xl font-serif text-dark-charcoal">48</p>
                </div>
              </div>

              {/* Recent Orders Placeholder */}
              <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="text-lg font-serif text-dark-charcoal uppercase tracking-widest">Recent Orders</h3>
                </div>
                <div className="p-6 text-center text-secondary-text">
                  <p>Order data will populate here from Supabase.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  );
}
