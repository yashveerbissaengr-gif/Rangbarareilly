"use client";

import { PageTransition } from "@/components/animations/PageTransition";
import { ProductCard } from "@/components/products/ProductCard";
import { type Product } from "@/types";
import { notFound } from "next/navigation";
import { ChevronRight, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Dummy data for now
const dummyProducts: Product[] = [
  { id: "1", title: "Pearl Huggies", slug: "pearl-huggies", base_price: 1199, images: ["/images/product-earrings.jpg"], is_active: true },
  { id: "2", title: "Golden Heart Drops", slug: "golden-heart-drops", base_price: 1299, images: ["/images/product-earrings.jpg"], is_active: true },
  { id: "3", title: "Mini Flora Studs", slug: "mini-flora-studs", base_price: 1099, images: ["/images/product-earrings.jpg"], is_active: true },
  { id: "4", title: "Twist Hoops", slug: "twist-hoops", base_price: 1299, images: ["/images/product-earrings.jpg"], is_active: true },
  { id: "5", title: "Ruby Glow Ring", slug: "ruby-glow-ring", base_price: 1399, images: ["/images/product-ring.jpg"], is_active: true },
  { id: "6", title: "Classic Hoops", slug: "classic-hoops", base_price: 999, images: ["/images/product-earrings.jpg"], is_active: true },
  { id: "7", title: "Layered Star Necklace", slug: "layered-star-necklace", base_price: 1299, images: ["/images/product-necklace.jpg"], is_active: true },
  { id: "8", title: "Butterfly Studs", slug: "butterfly-studs", base_price: 1099, images: ["/images/product-earrings.jpg"], is_active: true },
];

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Featured");

  if (!slug) {
    notFound();
  }

  // Filter logic
  const filteredProducts = dummyProducts.filter((product) => {
    // For dummy purposes, we'll just pretend everything matches Category unless it's a specific test
    // In a real app: const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesCategory = true;
    
    // Price logic based on strings
    let matchesPrice = true;
    if (selectedPrices.length > 0) {
      matchesPrice = selectedPrices.some(priceRange => {
        if (priceRange === 'Under ₹1000') return product.base_price < 1000;
        if (priceRange === '₹1000 - ₹2000') return product.base_price >= 1000 && product.base_price <= 2000;
        if (priceRange === '₹2000 - ₹5000') return product.base_price > 2000 && product.base_price <= 5000;
        if (priceRange === 'Above ₹5000') return product.base_price > 5000;
        return false;
      });
    }
    return matchesCategory && matchesPrice;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.base_price - b.base_price;
    if (sortBy === "Price: High to Low") return b.base_price - a.base_price;
    return 0; // Featured or New Arrivals default
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FDFCF8]">
        
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#666]">
            <Link href="/" className="hover:text-[#E30613] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/collections" className="hover:text-[#E30613] transition-colors">Collections</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1e1e1e] font-bold">{slug.replace(/-/g, ' ')}</span>
          </div>
        </div>

        {/* Collection Banner Header */}
        <div className="relative h-[30vh] min-h-[250px] w-full bg-[#F7F2E8] flex flex-col items-center justify-center overflow-hidden border-y border-[#E8DED0]">
          <div className="absolute inset-0 bg-[url('/images/ugc-hero.jpg')] opacity-20 mix-blend-multiply bg-cover bg-center" />
          <div className="relative z-20 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1e1e1e] uppercase tracking-widest mb-3">
              {slug.replace(/-/g, ' ')}
            </h1>
            <p className="mt-2 max-w-xl mx-auto text-[#666] text-sm md:text-base italic font-serif">
              Curated pieces that are made to be loved.
            </p>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-1/4 hidden lg:block">
              <div className="sticky top-28">
                <div className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest text-[#1e1e1e] mb-6 pb-4 border-b border-[#E8DED0]">
                  <Filter className="w-4 h-4" /> Filters
                </div>
                
                <div className="space-y-8">
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#1e1e1e] mb-4 pb-2 border-b border-[#E8DED0]">Category</h3>
                    <ul className="space-y-3">
                      {['All', 'Earrings', 'Necklaces', 'Rings', 'Bracelets', 'Accessories'].map(cat => (
                        <li key={cat}>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio"
                              name="category"
                              checked={activeCategory === cat}
                              onChange={() => setActiveCategory(cat)}
                              className="w-3.5 h-3.5 border border-[#E8DED0] rounded-full checked:bg-[#C82245] checked:border-[#C82245] appearance-none cursor-pointer focus:ring-1 focus:ring-[#C82245] transition-all" 
                            />
                            <span className={`text-sm md:text-[15px] transition-colors cursor-pointer ${activeCategory === cat ? 'text-[#C82245] font-semibold' : 'text-[#666] group-hover:text-[#C82245]'}`}>
                              {cat}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#1e1e1e] mb-4 pb-2 border-b border-[#E8DED0]">Price</h3>
                    <ul className="space-y-3">
                      {['Under ₹1000', '₹1000 - ₹2000', '₹2000 - ₹5000', 'Above ₹5000'].map(price => (
                        <li key={price}>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={selectedPrices.includes(price)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedPrices([...selectedPrices, price]);
                                } else {
                                  setSelectedPrices(selectedPrices.filter(p => p !== price));
                                }
                              }}
                              className="w-3.5 h-3.5 border border-[#E8DED0] rounded-sm checked:bg-[#C82245] checked:border-[#C82245] appearance-none cursor-pointer focus:ring-1 focus:ring-[#C82245] transition-all" 
                            />
                            <span className={`text-sm md:text-[15px] transition-colors cursor-pointer ${selectedPrices.includes(price) ? 'text-[#C82245] font-semibold' : 'text-[#666] group-hover:text-[#C82245]'}`}>
                              {price}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              
              {/* Toolbar */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8DED0]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#666]">
                  {sortedProducts.length} Products
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="lg:hidden text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] flex items-center gap-2 border border-[#E8DED0] px-4 py-2 rounded">
                    <Filter className="w-3 h-3" /> Filter
                  </button>
                  <div className="flex items-center gap-2 border border-[#E8DED0] px-4 py-2 rounded">
                    <label htmlFor="sort" className="sr-only">Sort</label>
                    <select
                      id="sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="text-[10px] font-bold uppercase tracking-widest bg-transparent border-none text-[#1e1e1e] focus:ring-0 cursor-pointer outline-none"
                    >
                      <option value="Featured">Featured</option>
                      <option value="Price: Low to High">Price: Low to High</option>
                      <option value="Price: High to Low">Price: High to Low</option>
                      <option value="New Arrivals">New Arrivals</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Grid - Using same style as Home Page */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {sortedProducts.map((prod, i) => (
                  <Link href={`/products/${prod.slug}`} key={i} className="group flex flex-col space-y-3">
                    <div className="bg-[#F9F9F9] aspect-[4/5] relative overflow-hidden flex items-center justify-center">
                      <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-[#C82245]">
                        <span className="text-gray-400 hover:text-[#C82245] text-lg">♡</span>
                      </button>
                      <img src={prod.images[0]} alt={prod.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col space-y-1 pt-2">
                      {i < 3 && sortBy === "New Arrivals" && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C82245] mb-1">
                          NEW
                        </span>
                      )}
                      <h3 className="font-serif text-base md:text-lg text-neutral-800 tracking-wide font-medium group-hover:text-[#C82245] transition-colors">{prod.title}</h3>
                      <p className="font-sans text-sm md:text-base text-neutral-600 font-light">₹{prod.base_price.toLocaleString('en-IN')}</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Load More */}
              <div className="mt-16 flex justify-center">
                <button className="bg-white border border-[#1e1e1e] text-[#1e1e1e] px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  LOAD MORE
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
