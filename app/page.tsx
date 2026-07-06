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
                SHOP COLLECTION <ArrowRight className="w-4 h-4 ml-2" />
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

        {/* 5. CATEGORY HIGHLIGHT (TRENDING) */}
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              
              {/* Box 1 */}
              <div className="flex bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4">Trending Now</h3>
                  <p className="text-gray-500 text-xs md:text-sm mb-6 font-light">Explore our most loved pieces this season.</p>
                  <Link href="/shop" className="text-[10px] font-bold uppercase tracking-widest border-b border-black w-max pb-1 hover:text-[#C82245] hover:border-[#C82245] transition-colors">
                    Explore
                  </Link>
                </div>
                <div className="w-1/2">
                  <AnimatedImage 
                    src="/images/product-earrings.jpg" 
                    alt="Trending" 
                    animation="pan"
                    containerClassName="w-full h-full"
                    className="hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
              </div>
              
              {/* Box 2 */}
              <div className="flex bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4">Sunlit Layers</h3>
                  <p className="text-gray-500 text-xs md:text-sm mb-6 font-light">Layered necklaces for an effortless look.</p>
                  <Link href="/shop" className="text-[10px] font-bold uppercase tracking-widest border-b border-black w-max pb-1 hover:text-[#C82245] hover:border-[#C82245] transition-colors">
                    Explore
                  </Link>
                </div>
                <div className="w-1/2">
                  <AnimatedImage 
                    src="/images/product-ring.jpg" 
                    alt="Sunlit" 
                    animation="zoom-out"
                    containerClassName="w-full h-full"
                    className="hover:scale-105 transition-transform duration-1000" 
                  />
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
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { title: "Pearl Huggies", price: 1199 },
                  { title: "Golden Heart Drops", price: 1299 },
                  { title: "Mini Flora Studs", price: 1099 },
                  { title: "Twist Hoops", price: 1299 },
                  { title: "Ruby Glow Ring", price: 1399 },
                ].map((prod, i) => (
                  <Link href={`/products/${prod.title.toLowerCase().replace(/ /g, '-')}`} key={i} className="group block text-left">
                    <div className="aspect-square bg-white border border-gray-100 shadow-sm relative mb-3 overflow-hidden rounded flex items-center justify-center transition-all group-hover:shadow-lg">
                      <div className="absolute top-2 left-2 bg-white px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider z-10 border border-gray-100">NEW</div>
                      <button className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#E30613]"><Heart className="w-4 h-4 text-gray-400" /></button>
                      <AnimatedImage 
                        src="/images/product-necklace.jpg" 
                        alt={prod.title} 
                        animation="slide-up"
                        delay={i * 0.15}
                        containerClassName="w-full h-full flex items-center justify-center bg-transparent"
                        className="!w-3/4 !h-3/4 !object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <h3 className="text-[11px] font-bold text-[#1e1e1e] group-hover:text-[#E30613] transition-colors">{prod.title}</h3>
                    <p className="text-[11px] text-[#666] mt-0.5">₹{prod.price.toLocaleString('en-IN')}</p>
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

        {/* 12. STAY IN THE LOOP */}
        <section className="py-20 md:py-28 bg-[#111111] text-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-serif mb-4 text-[#D4AF37]">Join The Club.</h2>
                <p className="text-gray-400 font-light text-sm md:text-base mb-8 max-w-md">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                <div className="flex w-full max-w-md">
                  <input type="email" placeholder="Enter your email" className="bg-transparent border-b border-gray-600 px-0 py-2 w-full text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors" />
                  <button className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap ml-4">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex justify-between px-0 lg:px-8">
                {[
                  { icon: "🎁", title: "Exclusive Offers", sub: "Just for you" },
                  { icon: "✉️", title: "Early Access", sub: "New launches" },
                  { icon: "✨", title: "Style Inspiration", sub: "Delivered to you" },
                ].map((perk, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="text-2xl mb-2 grayscale opacity-80">{perk.icon}</div>
                    <h4 className="text-[9px] font-bold uppercase text-[#1e1e1e]">{perk.title}</h4>
                    <p className="text-[9px] text-[#666]">{perk.sub}</p>
                  </div>
                ))}
              </div>

              <div className="w-full lg:w-1/3 h-48 lg:h-64 rounded-lg overflow-hidden hidden md:block">
                <AnimatedImage 
                  src="/images/product-ring.jpg" 
                  alt="Stay in loop" 
                  animation="zoom-out"
                  containerClassName="w-full h-full"
                  className="hover:scale-105 transition-transform duration-1000" 
                />
              </div>

            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
