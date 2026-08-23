import { getCollection, getProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/product/ProductCard";

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let products = await getCollection(resolvedParams.slug);
  
  if (resolvedParams.slug === 'hot-selling') {
    const all = await getProducts();
    products = all.filter(p => p.isBestSeller);
  } else if (resolvedParams.slug === 'new') {
    const all = await getProducts();
    products = all.slice(0, 10);
  }

  const title = resolvedParams.slug === 'all' 
    ? "All Products" 
    : resolvedParams.slug.replace('-', ' ').toUpperCase();

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-accent text-center text-gray-800 mb-12">{title}</h1>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-xl">No products found in this collection.</p>
        </div>
      )}
    </div>
  );
}
