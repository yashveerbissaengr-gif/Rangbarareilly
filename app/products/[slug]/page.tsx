import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/lib/shopify';
import { ImageGallery } from '@/components/products/ImageGallery';
import { ProductInfo } from '@/components/products/ProductInfo';
import { RelatedProducts } from '@/components/products/RelatedProducts';
import { Navigation } from '@/components/blocks/Navigation';
import { Footer } from '@/components/blocks/Footer';
import { cn } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug);

  if (!product) {
    return { title: 'Product Not Found | GLINT' };
  }

  return {
    title: `${product.title} | GLINT`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug);

  if (!product) {
    return notFound();
  }

  // Determine theme based on mock logic (in a real app, this might come from a metafield or tag)
  const isLoudProduct = product.slug === 'charm-bracelet' || product.slug === 'stack-rings';
  const theme = isLoudProduct ? "loud" : "core";
  const bgClass = theme === "loud" ? "bg-[#2B2622]" : "bg-[#F5F2EA]";

  // Fetch all products to pass into related products, excluding the current one
  const allProducts = await getProducts();
  const relatedProducts = allProducts.filter(p => p.id !== product.id);

  return (
    <div className={cn("flex flex-col w-full min-h-screen", bgClass)}>
      <Navigation theme={theme} />
      
      {/* Product Details Section - Sticky split layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto pt-24">
        <ImageGallery images={product.images} />
        <ProductInfo product={product} theme={theme} />
      </div>

      {/* Related Products Section */}
      <RelatedProducts products={relatedProducts} theme={theme} />
      
      <Footer theme={theme} />
    </div>
  );
}
