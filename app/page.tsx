import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedImage } from "@/components/animations/AnimatedImage";
import Link from "next/link";
import { ArrowRight, ChevronRight, ChevronLeft, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen bg-white overflow-hidden">
        
        {/* 2. HERO SECTION */}
        <section className="relative w-full h-[calc(100vh-115px)] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/images/ugc-hero.jpg')] bg-cover bg-center z-0"></div>
          
          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="w-full md:w-1/2 pt-12 md:pt-0 pl-0 md:pl-10 lg:pl-20 text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#F3E5AB] leading-none mb-2 md:ml-12 italic">
                Jewellery that
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif text-white leading-none tracking-tight mb-2">
                MAKES YOU
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif text-white leading-none tracking-tight mb-8">
                SMILE <span className="text-[#F3E5AB] text-3xl md:text-5xl relative -top-4">✦</span>
              </h1>
              <p className="text-gray-100 text-sm md:text-base font-medium mb-1">Trendy designs. Premium quality.</p>
              <p className="text-gray-100 text-sm md:text-base font-medium mb-8">Made for every you.</p>
              
              <div className="flex items-center mb-10 w-48 md:w-64">
                <div className="h-px bg-[#F3E5AB] flex-1"></div>
                <span className="text-[#F3E5AB] mx-3 text-lg">✦</span>
                <div className="h-px bg-[#F3E5AB] flex-1"></div>
              </div>

              <Link href="/shop" className="inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black px-10 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                BROWSE CATEGORY <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>



        {/* 4. SHOP BY MOOD */}
        <section className="py-20 md:py-28 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-[#1e1e1e] mb-2 md:mb-3">Shop By Mood</h2>
              <p className="text-sm md:text-base text-gray-500 font-light">Find the perfect piece for every occasion.</p>
            </div>
            <Link href="/shop" className="hidden md:flex items-center text-[10px] font-bold uppercase tracking-widest hover:text-[#C82245] transition-colors group">
              View All <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="relative">
            {/* Scrollable container */}
            <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 scrollbar-hide snap-x">
              {[
                { name: "Festive Ready", img: "/images/product-ring.jpg" },
                { name: "Minimalist Magic", img: "/images/product-earrings.jpg" },
                { name: "Statement Makers", img: "/images/product-necklace.jpg" },
                { name: "Bridal Bliss", img: "/images/product-ring.jpg" },
                { name: "Office Chic", img: "/images/product-earrings.jpg" },
                { name: "Everyday Sparkle", img: "/images/product-necklace.jpg" }
              ].map((mood, i) => (
                <Link href="/shop" key={i} className="min-w-[140px] md:min-w-[160px] snap-center group">
                  <div className="aspect-[3/4] bg-white overflow-hidden rounded-t-lg mb-2 relative shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                    <AnimatedImage 
                      src={mood.img} 
                      alt={mood.name} 
                      animation="slide-up"
                      delay={i * 0.1}
                      containerClassName="w-full h-full"
                      className="group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="py-2 text-center">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#1e1e1e] group-hover:text-[#C82245] transition-colors">{mood.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 10. BEST SELLERS */}
        <section className="py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-serif text-[#1e1e1e] uppercase tracking-widest">Best Sellers</h2>
              <p className="text-gray-500 font-light text-sm mt-1">Our most loved styles, chosen by you.</p>
            </div>
            <Link href="/shop" className="hidden md:flex items-center text-[10px] font-bold uppercase tracking-widest hover:text-[#C82245] transition-colors group">
              View All <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Diamond Halo Ring", price: 2999 },
              { title: "Gold Chain Bracelet", price: 1499 },
              { title: "Classic Pearl Studs", price: 899 },
              { title: "Emerald Drop Earrings", price: 3499 },
            ].map((prod, i) => (
              <Link href={`/products/${prod.title.toLowerCase().replace(/ /g, '-')}`} key={i} className="group text-left block">
                <div className="aspect-[4/5] bg-white shadow-sm border border-gray-100 relative mb-3 overflow-hidden flex items-center justify-center transition-all group-hover:shadow-lg">
                  <AnimatedImage 
                    src="/images/product-necklace.jpg" 
                    alt={prod.title} 
                    animation="slide-up"
                    delay={i * 0.1}
                    containerClassName="w-full h-full flex items-center justify-center bg-transparent"
                    className="!w-3/4 !h-3/4 !object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-[11px] font-bold text-[#1e1e1e] group-hover:text-[#E30613] transition-colors">{prod.title}</h3>
                <p className="text-[11px] text-[#666] mt-0.5">₹{prod.price.toLocaleString('en-IN')}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. CATEGORY HIGHLIGHT (TRENDING) */}
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-24 md:gap-32">
              
              {/* Asymmetric Box 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 lg:pl-12">
                  <h3 className="text-3xl md:text-5xl font-serif text-[#1e1e1e] tracking-wide mb-6">Trending Now</h3>
                  <p className="text-[#666] text-base md:text-lg mb-10 font-light leading-[1.6]">
                    Explore our most loved pieces this season. Crafted for elegance and everyday luxury.
                  </p>
                  <Link href="/shop" className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-transparent w-max pb-1 hover:border-[#1e1e1e] transition-all duration-300">
                    EXPLORE
                  </Link>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#FBFBFA]">
                    <AnimatedImage 
                      src="/images/product-earrings.jpg" 
                      alt="Trending" 
                      animation="pan"
                      containerClassName="w-full h-full"
                      className="object-cover w-full h-full hover:scale-103 transition-transform duration-700 ease-out" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Asymmetric Box 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#FBFBFA]">
                    <AnimatedImage 
                      src="/images/product-ring.jpg" 
                      alt="Sunlit" 
                      animation="zoom-out"
                      containerClassName="w-full h-full"
                      className="object-cover w-full h-full hover:scale-103 transition-transform duration-700 ease-out" 
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center lg:pr-12">
                  <h3 className="text-3xl md:text-5xl font-serif text-[#1e1e1e] tracking-wide mb-6">Sunlit Layers</h3>
                  <p className="text-[#666] text-base md:text-lg mb-10 font-light leading-[1.6]">
                    Layered necklaces for an effortless look. Perfect for catching the light at every angle.
                  </p>
                  <Link href="/shop" className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-transparent w-max pb-1 hover:border-[#1e1e1e] transition-all duration-300">
                    EXPLORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. NEW ARRIVALS */}
        <section className="py-20 bg-[#FDFCF8]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-4">
              <h2 className="text-xl md:text-2xl font-serif text-[#1e1e1e] uppercase tracking-widest flex items-center gap-3">
                NEW ARRIVALS <span className="text-[#E8D0A3]">✦</span>
              </h2>
              <Link href="/shop" className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] hover:text-[#E30613] transition-colors">
                VIEW ALL
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {[
                  { title: "Pearl Huggies", price: 1199 },
                  { title: "Golden Heart Drops", price: 1299 },
                  { title: "Mini Flora Studs", price: 1099 },
                ].map((prod, i) => (
                  <Link href={`/products/${prod.title.toLowerCase().replace(/ /g, '-')}`} key={i} className="group block text-left flex flex-col space-y-4">
                    <div className="aspect-[4/5] bg-[#FBFBFA] relative overflow-hidden flex items-center justify-center">
                      <button className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#C82245]">
                        <Heart className="w-5 h-5 text-gray-400" />
                      </button>
                      <AnimatedImage 
                        src="/images/product-necklace.jpg" 
                        alt={prod.title} 
                        animation="slide-up"
                        delay={i * 0.15}
                        containerClassName="w-full h-full flex items-center justify-center bg-transparent"
                        className="object-cover w-full h-full hover:scale-103 transition-transform duration-700 ease-out" 
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C82245] mb-1">
                        NEW
                      </span>
                      <h3 className="font-serif text-lg md:text-xl text-neutral-800 tracking-wide font-medium group-hover:text-[#C82245] transition-colors">{prod.title}</h3>
                      <p className="font-sans text-base text-neutral-600 font-light">₹{prod.price.toLocaleString('en-IN')}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHY RANGBAREILLY? */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/4">
                <h3 className="text-xl font-serif text-[#1e1e1e] uppercase tracking-widest mb-1">WHY</h3>
                <h3 className="text-xl font-serif text-[#1e1e1e] uppercase tracking-widest mb-4">RANGBAREILLY?</h3>
                <p className="text-xs text-[#666] mb-6">We believe in jewellery that fits your life and your style.</p>
                <Link href="/about" className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] hover:text-[#E30613] flex items-center">
                  READ OUR STORY <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </div>
              <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { icon: "✨", title: "Handpicked Designs" },
                  { icon: "🏷️", title: "Affordable Luxury" },
                  { icon: "⭐", title: "Premium Finish" },
                  { icon: "📦", title: "Fast & Safe Shipping" },
                  { icon: "🤍", title: "Loved by Thousands" },
                ].map((val, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-xl mb-3">{val.icon}</div>
                    <p className="text-[10px] font-bold text-[#1e1e1e] leading-snug">{val.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. 3-COLUMN FEATURE */}
        <section className="py-20 bg-[#FDFCF8]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#E8D0A3]/20 p-8 flex flex-col justify-between h-[300px]">
                <div>
                  <h3 className="text-lg font-serif text-[#1e1e1e] uppercase tracking-widest mb-1">INSTAGRAM WALL</h3>
                  <h4 className="text-2xl font-serif text-[#1e1e1e] mb-6">Shop The Looks</h4>
                </div>
                <div className="flex gap-2 mb-6 h-24">
                  <AnimatedImage src="/images/product-necklace.jpg" alt="Insta 1" containerClassName="w-1/3 h-full" animation="zoom-out" delay={0.1} />
                  <AnimatedImage src="/images/product-earrings.jpg" alt="Insta 2" containerClassName="w-1/3 h-full" animation="zoom-out" delay={0.2} />
                  <AnimatedImage src="/images/product-ring.jpg" alt="Insta 3" containerClassName="w-1/3 h-full" animation="zoom-out" delay={0.3} />
                </div>
                <button className="bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest w-max hover:bg-[#E30613] transition-colors">EXPLORE NOW</button>
              </div>

              <div className="bg-[#D3C1B3]/30 p-8 flex flex-col justify-between h-[300px] relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/images/product-ring.jpg')] bg-cover bg-center mix-blend-multiply opacity-50 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-sm font-bold text-[#1e1e1e] uppercase tracking-widest mb-1">REAL GIRLS, REAL LOVE</h3>
                  <h4 className="text-2xl font-serif text-[#1e1e1e] mb-6">Customer Stories</h4>
                </div>
                <button className="relative z-10 bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest w-max hover:bg-[#E30613] transition-colors">READ STORIES</button>
              </div>

              <div className="bg-[#BFAEA4]/30 p-8 flex flex-col justify-between h-[300px] relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/images/product-earrings.jpg')] bg-cover bg-center mix-blend-multiply opacity-50 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-sm font-bold text-[#1e1e1e] uppercase tracking-widest mb-1">BEHIND THE BRAND</h3>
                  <h4 className="text-2xl font-serif text-[#1e1e1e] mb-6">Our Journey</h4>
                </div>
                <button className="relative z-10 bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest w-max hover:bg-[#E30613] transition-colors">DISCOVER MORE</button>
              </div>

            </div>
          </div>
        </section>

        {/* 9. BLOOM & SHINE */}
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden">
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-serif text-[#1e1e1e] mb-4">Bloom & Shine</h2>
                <p className="text-gray-500 text-sm md:text-base font-light mb-8 max-w-md">Embrace the season with floral-inspired designs that capture the essence of spring. Delicate, vibrant, and timeless.</p>
                <Link href="/shop" className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] w-max hover:opacity-90 transition-opacity">
                  SHOP THE COLLECTION
                </Link>
              </div>
              <div className="w-full md:w-1/2 h-full">
                <AnimatedImage 
                  src="/images/product-ring.jpg" 
                  alt="Bloom" 
                  animation="pan"
                  containerClassName="w-full h-full"
                  className="hover:scale-105 transition-transform duration-[1.5s]" 
                />
              </div>
            </div>
          </div>
        </section>



        {/* 11. BRAND PROMISE / MANIFESTO */}
        <section className="py-24 bg-white border-t border-gray-100 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-serif text-[#1e1e1e] mb-6 leading-tight">Jewellery That Makes You Smile.</h2>
            <p className="text-gray-500 text-sm md:text-base font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              We believe that fine jewellery shouldn't just be for special occasions. Our pieces are designed to be worn, loved, and lived in every single day. Crafted with uncompromising quality and attention to detail.
            </p>
            <Link href="/about" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#C82245] hover:border-[#C82245] transition-colors">
              Our Story
            </Link>
          </div>
        </section>

        {/* 3. TRUST STRIP */}
        <section className="bg-[#111111] py-12 border-b border-gray-800">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-800">
              {[
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M12 22 16 9l-3-6"/><path d="M2 9h20"/></svg>, title: "PREMIUM QUALITY", sub: "Crafted with perfection" },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>, title: "PERFECT FOR GIFTING", sub: "Beautifully packaged" },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>, title: "WATER RESISTANT", sub: "Tarnish-free jewellery" },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>, title: "FAST & RELIABLE", sub: "Delivery across India" }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col xl:flex-row items-center justify-center gap-3 xl:gap-4 text-center xl:text-left ${i === 0 ? '' : 'md:pl-6'}`}>
                  <div className="flex items-center justify-center w-10 h-10 mb-1 xl:mb-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-0.5">{item.title}</h4>
                    <p className="text-[11px] text-gray-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. WHATSAPP CHANNEL */}
        <section className="py-12 bg-[#F9F6F0]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-white border border-[#E5E0D8] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_-10px_rgba(200,34,69,0.1)]">
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C82245]/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="relative z-10 flex items-center gap-6">
                <div className="hidden sm:flex w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 items-center justify-center">
                   <svg className="w-8 h-8 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-serif text-[#1e1e1e]">Join Our WhatsApp Channel</h3>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C82245] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C82245]"></span>
                    </span>
                  </div>
                  <p className="text-[#666] text-sm max-w-lg">Join for our latest product drops, exclusive VIP deals, and early access.</p>
                </div>
              </div>
              
              <div className="relative z-10 w-full md:w-auto flex-shrink-0">
                <a href="#" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#C82245] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#A81A38] hover:shadow-[0_10px_20px_rgba(200,34,69,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  Subscribe Now
                </a>
              </div>

            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
