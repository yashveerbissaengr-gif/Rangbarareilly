import { getProductsQuery, getProductQuery, getCollectionQuery } from './queries';
import { Product } from '@/types';

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>({
  cache = 'force-cache',
  headers,
  query,
  tags,
  variables
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: Record<string, unknown>;
}): Promise<{ status: number; body: T } | never> {
  if (!domain || !storefrontAccessToken) {
    // Return mocked data if Shopify is not yet configured
    console.warn('Shopify environment variables not configured. Falling back to mock data.');
    return { status: 200, body: {} as T };
  }

  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      ...(tags && { next: { tags } })
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    throw {
      error: e,
      query
    };
  }
}

const MOCK_PRODUCTS: Product[] = [
  // CORE PRODUCTS
  {
    id: "prod_1",
    slug: "cloud-stud",
    title: "Cloud stud",
    description: "A delicate, lightweight stud for everyday wear.",
    material: "14k Solid Gold",
    care: "Clean with a soft cloth. Avoid harsh chemicals.",
    shipping: "Free standard shipping on all orders.",
    returns: "30-day return policy for unworn items.",
    price: 249,
    collection: "Studs",
    rating: 4.8,
    reviewCount: 124,
    tags: ["everyday", "gold", "minimal", "core"],
    variants: [{ id: "v1", name: "14k Yellow Gold", sku: "CS-YG", priceDelta: 0, stock: 10 }],
    images: [{ url: "/products/cloud-stud.svg", isPrimary: true, alt: "Cloud stud" }]
  },
  {
    id: "prod_2",
    slug: "stack-rings",
    title: "Stack rings",
    description: "Minimalist rings designed for effortless stacking.",
    material: "14k Solid Gold",
    care: "Clean with a soft cloth. Avoid harsh chemicals.",
    shipping: "Free standard shipping on all orders.",
    returns: "30-day return policy for unworn items.",
    price: 349,
    collection: "Rings",
    rating: 4.9,
    reviewCount: 89,
    tags: ["stackable", "gold", "minimal", "core"],
    variants: [{ id: "v2", name: "14k Yellow Gold", sku: "SR-YG", priceDelta: 0, stock: 8 }],
    images: [{ url: "/products/stack-rings.svg", isPrimary: true, alt: "Stack rings" }]
  },
  {
    id: "prod_3",
    slug: "delicate-chain",
    title: "Delicate chain",
    description: "A fine, barely-there gold chain.",
    material: "14k Solid Gold",
    care: "Clean with a soft cloth. Avoid harsh chemicals.",
    shipping: "Free standard shipping on all orders.",
    returns: "30-day return policy for unworn items.",
    price: 449,
    collection: "Necklaces",
    rating: 5.0,
    reviewCount: 210,
    tags: ["chain", "gold", "everyday", "core"],
    variants: [{ id: "v3", name: "14k Yellow Gold", sku: "DC-YG", priceDelta: 0, stock: 5 }],
    images: [{ url: "/products/delicate-chain.svg", isPrimary: true, alt: "Delicate chain" }]
  },
  {
    id: "prod_4",
    slug: "charm-bracelet",
    title: "Charm bracelet",
    description: "An everyday bracelet with a single, elegant charm.",
    material: "14k Solid Gold",
    care: "Clean with a soft cloth. Avoid harsh chemicals.",
    shipping: "Free standard shipping on all orders.",
    returns: "30-day return policy for unworn items.",
    price: 399,
    collection: "Bracelets",
    rating: 4.7,
    reviewCount: 56,
    tags: ["bracelet", "charm", "gold", "core"],
    variants: [{ id: "v4", name: "14k Yellow Gold", sku: "CB-YG", priceDelta: 0, stock: 12 }],
    images: [{ url: "/products/charm-bracelet.svg", isPrimary: true, alt: "Charm bracelet" }]
  },

  // LOUD PRODUCTS
  {
    id: "prod_5",
    slug: "turquoise-stone-watch",
    title: "Turquoise stone watch",
    description: "A statement watch featuring vibrant turquoise stones.",
    material: "14k Solid Gold & Turquoise",
    care: "Clean with a soft cloth. Avoid water and harsh chemicals.",
    shipping: "Free standard shipping on all orders.",
    returns: "30-day return policy for unworn items.",
    price: 1499,
    collection: "Watches",
    rating: 4.9,
    reviewCount: 42,
    tags: ["watch", "turquoise", "statement", "loud"],
    variants: [{ id: "v5", name: "Standard", sku: "TSW", priceDelta: 0, stock: 4 }],
    images: [{ url: "/products/turquoise-watch.svg", isPrimary: true, alt: "Turquoise stone watch" }]
  },
  {
    id: "prod_6",
    slug: "emerald-bead-watch",
    title: "Emerald bead watch",
    description: "A striking watch adorned with rich emerald beads.",
    material: "14k Solid Gold & Emerald",
    care: "Clean with a soft cloth. Avoid water and harsh chemicals.",
    shipping: "Free standard shipping on all orders.",
    returns: "30-day return policy for unworn items.",
    price: 1599,
    collection: "Watches",
    rating: 4.8,
    reviewCount: 38,
    tags: ["watch", "emerald", "statement", "loud"],
    variants: [{ id: "v6", name: "Standard", sku: "EBW", priceDelta: 0, stock: 3 }],
    images: [{ url: "/products/emerald-watch.svg", isPrimary: true, alt: "Emerald bead watch" }]
  },
  {
    id: "prod_7",
    slug: "amethyst-clover-studs",
    title: "Amethyst clover studs",
    description: "Bold clover-shaped studs featuring deep amethyst.",
    material: "14k Solid Gold & Amethyst",
    care: "Clean with a soft cloth. Avoid harsh chemicals.",
    shipping: "Free standard shipping on all orders.",
    returns: "30-day return policy for unworn items.",
    price: 699,
    collection: "Studs",
    rating: 4.7,
    reviewCount: 84,
    tags: ["studs", "amethyst", "statement", "loud"],
    variants: [{ id: "v7", name: "Standard", sku: "ACS", priceDelta: 0, stock: 15 }],
    images: [{ url: "/products/amethyst-studs.svg", isPrimary: true, alt: "Amethyst clover studs" }]
  },
  {
    id: "prod_8",
    slug: "coral-drop-hoop",
    title: "Coral drop hoop",
    description: "Vibrant hoops featuring a stunning coral drop.",
    material: "14k Solid Gold & Coral",
    care: "Clean with a soft cloth. Avoid harsh chemicals.",
    shipping: "Free standard shipping on all orders.",
    returns: "30-day return policy for unworn items.",
    price: 599,
    collection: "Earrings",
    rating: 4.9,
    reviewCount: 65,
    tags: ["hoops", "coral", "statement", "loud"],
    variants: [{ id: "v8", name: "Standard", sku: "CDH", priceDelta: 0, stock: 12 }],
    images: [{ url: "/products/coral-hoop.svg", isPrimary: true, alt: "Coral drop hoop" }]
  }
];

export async function getProducts(): Promise<Product[]> {
  if (!domain || !storefrontAccessToken) {
    return MOCK_PRODUCTS;
  }

  await shopifyFetch<unknown>({
    query: getProductsQuery,
    variables: { first: 10 }
  });

  // Map Shopify response to our Product type
  // (In a real scenario, proper mapping logic would go here)
  return []; 
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  if (!domain || !storefrontAccessToken) {
    return MOCK_PRODUCTS.find(p => p.slug === handle);
  }

  await shopifyFetch<unknown>({
    query: getProductQuery,
    variables: { handle }
  });

  return undefined;
}

export async function getCollection(handle: string): Promise<Product[]> {
  if (!domain || !storefrontAccessToken) {
    if (handle === 'all') return MOCK_PRODUCTS;
    if (handle === 'core') return MOCK_PRODUCTS.filter(p => p.tags.includes('core'));
    if (handle === 'loud') return MOCK_PRODUCTS.filter(p => p.tags.includes('loud'));
    return MOCK_PRODUCTS.filter(p => p.collection.toLowerCase() === handle.toLowerCase());
  }

  await shopifyFetch<unknown>({
    query: getCollectionQuery,
    variables: { handle }
  });

  return [];
}

import type { CartItem } from '@/lib/context/CartContext';

export async function createCheckout(items: CartItem[]): Promise<string | undefined> {
  // In a real integration, this would call the Shopify Storefront API
  // checkoutCreate mutation, passing the variant IDs and quantities.
  // It would then return the checkout.webUrl.
  console.log("Mock creating checkout for items:", items);
  return undefined;
}
