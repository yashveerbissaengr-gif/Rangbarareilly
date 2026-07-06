import { PageTransition } from "@/components/animations/PageTransition";
import { ProductCard } from "@/components/products/ProductCard";
import { type Product } from "@/types";
import { notFound } from "next/navigation";
import { ChevronRight, Filter } from "lucide-react";
import Link from "next/link";

// Dummy data for now
const dummyProducts: Product[] = [
  { id: "1", title: "Pearl Huggies", slug: "pearl-huggies", base_price: 1199, images: [], is_active: true },
  { id: "2", title: "Golden Heart Drops", slug: "golden-heart-drops", base_price: 1299, images: [], is_active: true },
  { id: "3", title: "Mini Flora Studs", slug: "mini-flora-studs", base_price: 1099, images: [], is_active: true },
  { id: "4", title: "Twist Hoops", slug: "twist-hoops", base_price: 1299, images: [], is_active: true },
  { id: "5", title: "Ruby Glow Ring", slug: "ruby-glow-ring", base_price: 1399, images: [], is_active: true },
  { id: "6", title: "Classic Hoops", slug: "classic-hoops", base_price: 999, images: [], is_active: true },
  { id: "7", title: "Layered Star Necklace", slug: "layered-star-necklace", base_price: 1299, images: [], is_active: true },
  { id: "8", title: "Butterfly Studs", slug: "butterfly-studs", base_price: 1099, images: [], is_active: true },
];

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  if (!slug) {
    notFound();
  }

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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 mix-blend-multiply bg-cover bg-center" />
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
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] mb-4">Category</h3>
                    <ul className="space-y-3">
                      {['All', 'Earrings', 'Necklaces', 'Rings', 'Bracelets', 'Accessories'].map(cat => (
                        <li key={cat}>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-3.5 h-3.5 border border-[#E8DED0] rounded-sm checked:bg-[#E30613] checked:border-[#E30613] appearance-none" />
                            <span className="text-xs text-[#666] group-hover:text-[#E30613] transition-colors">{cat}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] mb-4">Price</h3>
                    <ul className="space-y-3">
                      {['Under ₹1000', '₹1000 - ₹2000', '₹2000 - ₹5000', 'Above ₹5000'].map(price => (
                        <li key={price}>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-3.5 h-3.5 border border-[#E8DED0] rounded-sm checked:bg-[#E30613] checked:border-[#E30613] appearance-none" />
                            <span className="text-xs text-[#666] group-hover:text-[#E30613] transition-colors">{price}</span>
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
                  {dummyProducts.length} Products
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="lg:hidden text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] flex items-center gap-2 border border-[#E8DED0] px-4 py-2 rounded">
                    <Filter className="w-3 h-3" /> Filter
                  </button>
                  <div className="flex items-center gap-2 border border-[#E8DED0] px-4 py-2 rounded">
                    <label htmlFor="sort" className="sr-only">Sort</label>
                    <select
                      id="sort"
                      className="text-[10px] font-bold uppercase tracking-widest bg-transparent border-none text-[#1e1e1e] focus:ring-0 cursor-pointer outline-none"
                    >
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>New Arrivals</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Grid - Using same style as Home Page */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {dummyProducts.map((prod, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="bg-[#F5F5F5] aspect-square relative mb-3 overflow-hidden rounded flex items-center justify-center border border-transparent group-hover:border-[#E8DED0] transition-colors">
                      {i < 3 && <div className="absolute top-2 left-2 bg-white px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider z-10 border border-[#E8DED0]">NEW</div>}
                      <button className="absolute top-2 right-2 z-10"><span className="text-gray-400 hover:text-[#E30613] text-lg">♡</span></button>
                      <img src="https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?w=400&q=80" alt={prod.title} className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="text-[11px] font-bold text-[#1e1e1e] group-hover:text-[#E30613] transition-colors">{prod.title}</div>
                    <div className="text-[11px] text-[#666]">₹{prod.base_price.toLocaleString('en-IN')}</div>
                  </div>
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
