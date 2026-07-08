import { PageTransition } from "@/components/animations/PageTransition";
import { notFound } from "next/navigation";
import { ChevronRight, Heart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  if (!slug) {
    notFound();
  }

  // Dummy Product Data
  const product = {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    price: 1299,
    originalPrice: 1599,
    description: "Our signature piece, handcrafted to perfection. Featuring a timeless design that seamlessly blends classic elegance with modern wearability. Perfect for everyday luxury.",
    images: [
      "/images/product-earrings.jpg",
      "/images/product-necklace.jpg",
      "/images/product-ring.jpg",
    ],
    features: ["18k Gold Plated", "Hypoallergenic", "Water Resistant", "Handcrafted"],
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FDFCF8]">
        
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#666]">
            <Link href="/" className="hover:text-[#E30613] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/collections/all" className="hover:text-[#E30613] transition-colors">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1e1e1e] font-bold">{product.title}</span>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* Image Gallery */}
            <div className="w-full lg:w-[60%] flex gap-4">
              <div className="hidden lg:flex flex-col gap-4 w-20">
                {product.images.map((img, i) => (
                  <div key={i} className="aspect-square bg-[#F5F5F5] rounded border border-[#E8DED0] cursor-pointer hover:border-[#E30613] overflow-hidden">
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>
              <div className="flex-1 aspect-[4/5] bg-[#F5F5F5] rounded overflow-hidden flex items-center justify-center relative">
                <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover mix-blend-multiply" />
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-3.5 h-3.5 fill-[#C6A87C] text-[#C6A87C]" />
                ))}
                <span className="text-xs text-[#666] ml-2 font-medium">(128 Reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-serif text-[#1e1e1e] mb-4">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-serif text-[#E30613]">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-lg text-[#999] line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              </div>

              <p className="text-sm text-[#666] leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1e1e1e] mb-3">Key Features</h3>
                <ul className="grid grid-cols-2 gap-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#666]">
                      <span className="text-[#C6A87C]">✦</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mb-8">
                <button className="flex-1 bg-black text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#E30613] transition-colors">
                  Add to Cart
                </button>
                <button className="w-14 h-14 flex items-center justify-center border border-[#E8DED0] rounded hover:border-[#E30613] hover:text-[#E30613] transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-4 border-t border-[#E8DED0] pt-8 mt-2">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="w-5 h-5 text-[#C6A87C]" />
                  <span className="text-[9px] font-bold uppercase text-[#1e1e1e]">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RotateCcw className="w-5 h-5 text-[#C6A87C]" />
                  <span className="text-[9px] font-bold uppercase text-[#1e1e1e]">7-Day Returns</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Shield className="w-5 h-5 text-[#C6A87C]" />
                  <span className="text-[9px] font-bold uppercase text-[#1e1e1e]">1-Year Warranty</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
