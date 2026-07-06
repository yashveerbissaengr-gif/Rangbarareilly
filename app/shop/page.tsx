import { PageTransition } from "@/components/animations/PageTransition";
import Link from "next/link";
import { ChevronRight, Filter, Heart } from "lucide-react";

const shopProducts = [
  { id: "1", title: "Pearl Huggies", price: 1199, image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?w=400&q=80", tag: "NEW" },
  { id: "2", title: "Golden Heart Drops", price: 1299, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", tag: "BESTSELLER" },
  { id: "3", title: "Mini Flora Studs", price: 1099, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", tag: "" },
  { id: "4", title: "Twist Hoops", price: 1299, image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?w=400&q=80", tag: "" },
  { id: "5", title: "Ruby Glow Ring", price: 1399, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", tag: "NEW" },
  { id: "6", title: "Classic Hoops", price: 999, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", tag: "" },
  { id: "7", title: "Layered Star Necklace", price: 1299, image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?w=400&q=80", tag: "BESTSELLER" },
  { id: "8", title: "Butterfly Studs", price: 1099, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", tag: "" },
  { id: "9", title: "Emerald Drop Earrings", price: 1499, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", tag: "NEW" },
  { id: "10", title: "Diamond Accent Ring", price: 2199, image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?w=400&q=80", tag: "" },
  { id: "11", title: "Gold Chain Link", price: 1599, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", tag: "" },
  { id: "12", title: "Pearl Pendant", price: 1299, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", tag: "BESTSELLER" },
];

export default function ShopPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FDFCF8]">
        
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#666]">
            <Link href="/" className="hover:text-[#E30613] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1e1e1e] font-bold">Shop All</span>
          </div>
        </div>

        {/* Banner */}
        <div className="relative w-full h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden border-y border-[#E8DED0]">
          <div className="absolute inset-0 bg-[#F7F2E8] z-0" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 mix-blend-multiply bg-cover bg-center z-0" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1e1e1e] tracking-wide mb-4">
              All Collections
            </h1>
            <p className="max-w-xl mx-auto text-[#666] text-sm md:text-base font-serif italic">
              Discover our complete range of handcrafted jewelry, designed for the modern connoisseur of luxury.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Top Toolbar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8DED0]">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] hover:text-[#E30613] transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <div className="hidden md:flex gap-4 text-[10px] uppercase tracking-widest text-[#666]">
                <button className="hover:text-[#1e1e1e] font-bold text-[#1e1e1e]">All</button>
                <button className="hover:text-[#1e1e1e]">Earrings</button>
                <button className="hover:text-[#1e1e1e]">Necklaces</button>
                <button className="hover:text-[#1e1e1e]">Rings</button>
                <button className="hover:text-[#1e1e1e]">Bracelets</button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest text-[#666]">
                {shopProducts.length} Results
              </span>
              <div className="flex items-center gap-2 border border-[#E8DED0] px-4 py-2 rounded bg-white">
                <label htmlFor="sort" className="sr-only">Sort</label>
                <select
                  id="sort"
                  className="text-[10px] font-bold uppercase tracking-widest bg-transparent border-none text-[#1e1e1e] focus:ring-0 cursor-pointer outline-none"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            {/* Sidebar Filters (Desktop) */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28 space-y-10">
                
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] mb-4 pb-2 border-b border-[#E8DED0]">Material</h3>
                  <ul className="space-y-3">
                    {['18k Gold Plated', 'Sterling Silver', 'Rose Gold', 'Mixed Metal'].map(mat => (
                      <li key={mat}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" className="w-3.5 h-3.5 border border-[#E8DED0] rounded-sm checked:bg-[#E30613] checked:border-[#E30613] appearance-none" />
                          <span className="text-xs text-[#666] group-hover:text-[#E30613] transition-colors">{mat}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] mb-4 pb-2 border-b border-[#E8DED0]">Price Range</h3>
                  <ul className="space-y-3">
                    {['Under ₹1000', '₹1000 - ₹2000', '₹2000 - ₹5000', 'Over ₹5000'].map(price => (
                      <li key={price}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" className="w-3.5 h-3.5 border border-[#E8DED0] rounded-sm checked:bg-[#E30613] checked:border-[#E30613] appearance-none" />
                          <span className="text-xs text-[#666] group-hover:text-[#E30613] transition-colors">{price}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] mb-4 pb-2 border-b border-[#E8DED0]">Style</h3>
                  <ul className="space-y-3">
                    {['Minimalist', 'Statement', 'Vintage Inspired', 'Everyday Wear'].map(style => (
                      <li key={style}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" className="w-3.5 h-3.5 border border-[#E8DED0] rounded-sm checked:bg-[#E30613] checked:border-[#E30613] appearance-none" />
                          <span className="text-xs text-[#666] group-hover:text-[#E30613] transition-colors">{style}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
                {shopProducts.map((prod) => (
                  <Link href={`/products/${prod.title.toLowerCase().replace(/ /g, '-')}`} key={prod.id} className="group">
                    <div className="bg-[#F5F5F5] aspect-[4/5] relative mb-4 overflow-hidden rounded flex items-center justify-center border border-transparent group-hover:border-[#E8DED0] transition-colors">
                      {prod.tag && (
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[8px] font-bold uppercase tracking-wider z-10 border border-[#E8DED0]">
                          {prod.tag}
                        </div>
                      )}
                      <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-[#E30613]">
                        <Heart className="w-4 h-4" />
                      </button>
                      <img src={prod.image} alt={prod.title} className="w-4/5 h-4/5 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[12px] font-bold text-[#1e1e1e] group-hover:text-[#E30613] transition-colors">{prod.title}</h3>
                      <p className="text-[12px] text-[#666]">₹{prod.price.toLocaleString('en-IN')}</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Pagination / Load More */}
              <div className="mt-20 flex flex-col items-center justify-center border-t border-[#E8DED0] pt-12">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#666] mb-6">Showing 1-12 of 48 products</p>
                <div className="w-64 h-1 bg-[#E8DED0] rounded-full mb-8 overflow-hidden">
                  <div className="w-1/4 h-full bg-[#E30613]"></div>
                </div>
                <button className="bg-transparent border border-[#1e1e1e] text-[#1e1e1e] px-10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#1e1e1e] hover:text-white transition-colors">
                  Load More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
