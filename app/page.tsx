import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryBubbles } from "@/components/home/CategoryBubbles";
import { ProductSection } from "@/components/home/ProductSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { Footer } from "@/components/layout/Footer";
import { getProducts, getCollection } from "@/lib/shopify";

export default async function Home() {
  // Fetch some products for different sections
  // Ideally, you'd fetch from specific collections by handle
  const allProducts = await getProducts();
  const viralProducts = await getCollection('bracelets');
  const hotSelling = allProducts.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = allProducts.slice(0, 4);

  return (
    <>
      <HeroBanner />
      <CategoryBubbles />
      
      {/* INSTAGRAM VIRAL FINDS */}
      <ProductSection 
        title="Instagram Viral Finds" 
        products={viralProducts.length > 0 ? viralProducts.slice(0, 4) : allProducts.slice(0, 4)} 
        viewAllLink="/collections/viral" 
      />

      <PromoBanner />

      {/* NEW ARRIVALS */}
      <ProductSection 
        title="New Arrivals" 
        products={newArrivals.length > 0 ? newArrivals : allProducts.slice(0, 4)} 
        viewAllLink="/collections/new" 
      />

      {/* HOT SELLING */}
      <ProductSection 
        title="Hot Selling" 
        products={hotSelling.length > 0 ? hotSelling : allProducts.slice(0, 4)} 
        viewAllLink="/collections/hot-selling" 
      />

      <ReviewsSection />
      <Footer />
    </>
  );
}
