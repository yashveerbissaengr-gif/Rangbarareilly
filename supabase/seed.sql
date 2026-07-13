-- Insert dummy products
INSERT INTO public.products (id, title, slug, base_price, description, is_active)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Pearl Huggies', 'pearl-huggies', 1199, 'Classic pearl huggie earrings for everyday elegance.', true),
  ('22222222-2222-2222-2222-222222222222', 'Golden Heart Drops', 'golden-heart-drops', 1299, 'Beautiful golden heart drop earrings.', true),
  ('33333333-3333-3333-3333-333333333333', 'Ruby Glow Ring', 'ruby-glow-ring', 1399, 'A stunning ring with a ruby glow.', true),
  ('44444444-4444-4444-4444-444444444444', 'Layered Star Necklace', 'layered-star-necklace', 1299, 'Layered necklace featuring delicate stars.', true)
ON CONFLICT (id) DO NOTHING;

-- Insert dummy images
INSERT INTO public.product_images (product_id, url, is_primary)
VALUES
  ('11111111-1111-1111-1111-111111111111', '/images/product-earrings.jpg', true),
  ('22222222-2222-2222-2222-222222222222', '/images/product-earrings.jpg', true),
  ('33333333-3333-3333-3333-333333333333', '/images/product-ring.jpg', true),
  ('44444444-4444-4444-4444-444444444444', '/images/product-necklace.jpg', true)
ON CONFLICT DO NOTHING;
