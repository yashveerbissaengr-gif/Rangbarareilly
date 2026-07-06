import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.images.find(img => img.is_primary) || product.images[0];

  return (
    <div className="group relative flex flex-col gap-4">
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-warm-ivory rounded-lg">
        {primaryImage ? (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt_text || product.title}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-secondary-text">
            No Image
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      
      <div className="flex flex-col gap-1">
        {product.category && (
          <span className="text-xs uppercase tracking-widest text-secondary-text font-medium">
            {product.category.name}
          </span>
        )}
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-serif text-dark-charcoal hover:text-brand-red transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-dark-charcoal">
          ${product.base_price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
