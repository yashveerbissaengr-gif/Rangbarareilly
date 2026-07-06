export interface Product {
  id: string;
  title: string;
  slug: string;
  description?: string;
  base_price: number;
  images: { url: string; alt_text?: string; is_primary?: boolean }[];
  category?: { name: string; slug: string };
  is_active: boolean;
}
