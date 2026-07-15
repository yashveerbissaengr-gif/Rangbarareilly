import { Hero } from "@/components/home/Hero";
import { Navigation } from "@/components/blocks/Navigation";
import { Footer } from "@/components/blocks/Footer";
import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { BrandStory } from "@/components/home/BrandStory";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { Materials } from "@/components/home/Materials";
import { Testimonials } from "@/components/home/Testimonials";
import { getProducts } from "@/lib/shopify";

export const metadata = {
  title: "GLINT | Small Sparks. Everyday.",
  description: "Premium minimal jewelry designed for the quiet moments, not just the grand occasions.",
};

export default async function RootPage() {
  const products = await getProducts();
  const coreProducts = products.filter(p => p.tags.includes("core"));
  const loudProducts = products.filter(p => p.tags.includes("loud"));

  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* Global Navigation for the Homepage */}
      <Navigation theme="core" />
      
      <Hero />
      
      {/* CORE Section */}
      <section id="core-section" className="w-full bg-[#EAE2D3] text-[#2B2622]">
        <AnnouncementBar theme="core" />
        <BrandStory theme="core" />
        <FeaturedCategories products={coreProducts} theme="core" />
        <Materials theme="core" />
        <Testimonials theme="core" />
      </section>

      {/* LOUD Section */}
      <section id="loud-section" className="w-full bg-[#2B2622] text-[#EAE2D3]">
        <AnnouncementBar theme="loud" />
        <BrandStory theme="loud" />
        <FeaturedCategories products={loudProducts} theme="loud" />
        <Materials theme="loud" />
        <Testimonials theme="loud" />
      </section>

      {/* Global Footer */}
      <Footer theme="core" />
    </main>
  );
}
