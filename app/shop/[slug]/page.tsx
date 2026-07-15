import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCollection } from '@/lib/shopify';
import { CollectionHeader } from '@/components/collections/CollectionHeader';
import { FilterSidebar } from '@/components/collections/FilterSidebar';
import { ProductGrid } from '@/components/collections/ProductGrid';
import { Navigation } from '@/components/blocks/Navigation';
import { Footer } from '@/components/blocks/Footer';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Collection | GLINT',
  description: 'Explore the GLINT jewelry collection.',
};

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15+ App Router, params is a Promise that must be awaited
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const products = await getCollection(slug);

  if (!products) {
    return notFound();
  }

  // Determine theme based on the collection slug
  const theme = slug === "loud" ? "loud" : "core";
  const bgClass = theme === "loud" ? "bg-[#2B2622]" : "bg-[#F5F2EA]";

  return (
    <div className={cn("flex flex-col w-full min-h-screen", bgClass)}>
      <Navigation theme={theme} />
      
      <div className="pt-[73px]">
        <CollectionHeader 
          title={slug === "all" ? "Shop All" : slug} 
          description={slug === "all" ? "Explore our entire collection of fine jewelry and statement pieces." : `Explore our curated selection of fine ${slug.replace("-", " ")} designed for the quiet moments.`}
          productCount={products.length}
          theme={theme}
        />
        
        <div className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-24 py-16 gap-12 lg:gap-24 relative">
          <FilterSidebar theme={theme} />
          
          <div className="flex-1 flex flex-col gap-16">
            {slug === "all" ? (
              <div className="flex flex-col gap-16">
                {/* Core Categories */}
                <div className="flex flex-col gap-8">
                  <h2 className="text-2xl font-serif text-glint-charcoal flex items-center gap-2">
                    <span className="text-xl">+</span> Glint Core
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Array.from(new Set(products.filter(p => p.tags.includes("core")).map(p => p.collection))).map(collectionName => {
                      const firstProduct = products.find(p => p.collection === collectionName && p.tags.includes("core"));
                      const primaryImage = firstProduct?.images.find(img => img.isPrimary) || firstProduct?.images[0];
                      return (
                        <a key={`core-${collectionName}`} href={`/shop/${collectionName.toLowerCase()}`} className="group cursor-pointer block">
                          <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-xl bg-[#F5F2EA]">
                            {primaryImage && (
                              <img
                                src={primaryImage.url}
                                alt={collectionName}
                                className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105 w-full h-full absolute inset-0"
                              />
                            )}
                          </div>
                          <div className="flex flex-col text-center">
                            <span className="font-medium text-lg uppercase tracking-widest text-glint-charcoal">{collectionName}</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Loud Categories */}
                <div className="flex flex-col gap-8">
                  <h2 className="text-2xl font-serif text-[#C9A227] flex items-center gap-2">
                    <span className="text-xl">+</span> Glint Loud
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from(new Set(products.filter(p => p.tags.includes("loud")).map(p => p.collection))).map(collectionName => {
                      const firstProduct = products.find(p => p.collection === collectionName && p.tags.includes("loud"));
                      const primaryImage = firstProduct?.images.find(img => img.isPrimary) || firstProduct?.images[0];
                      return (
                        <a key={`loud-${collectionName}`} href={`/shop/${collectionName.toLowerCase()}`} className="group cursor-pointer block">
                          <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-xl bg-[#2B2622]">
                            {primaryImage && (
                              <img
                                src={primaryImage.url}
                                alt={collectionName}
                                className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105 w-full h-full absolute inset-0"
                              />
                            )}
                          </div>
                          <div className="flex flex-col text-center">
                            <span className="font-medium text-lg uppercase tracking-widest text-glint-charcoal">{collectionName}</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <ProductGrid products={products} theme={theme} />
            )}
          </div>
        </div>
      </div>
      
      <Footer theme={theme} />
    </div>
  );
}
