-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROFILES
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  first_name text,
  last_name text,
  phone text,
  role text default 'customer' check (role in ('customer', 'admin', 'super_admin')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles for update using (auth.uid() = id);

-- CATEGORIES
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.categories enable row level security;
create policy "Categories are viewable by everyone." on categories for select using (true);

-- COLLECTIONS
create table public.collections (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  description text,
  banner_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.collections enable row level security;
create policy "Collections are viewable by everyone." on collections for select using (true);

-- PRODUCTS
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  description text,
  category_id uuid references public.categories on delete set null,
  collection_id uuid references public.collections on delete set null,
  base_price numeric not null,
  metal_purity text,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.products enable row level security;
create policy "Products are viewable by everyone." on products for select using (true);

-- PRODUCT IMAGES
create table public.product_images (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products on delete cascade not null,
  url text not null,
  alt_text text,
  is_primary boolean default false,
  display_order integer default 0
);
alter table public.product_images enable row level security;
create policy "Product images are viewable by everyone." on product_images for select using (true);

-- VARIANTS
create table public.variants (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products on delete cascade not null,
  size text,
  color text,
  sku text unique not null,
  price_adjustment numeric default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.variants enable row level security;
create policy "Variants are viewable by everyone." on variants for select using (true);

-- INVENTORY
create table public.inventory (
  id uuid default uuid_generate_v4() primary key,
  variant_id uuid references public.variants on delete cascade not null,
  quantity integer default 0 not null,
  low_stock_threshold integer default 5,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.inventory enable row level security;
create policy "Inventory is viewable by everyone." on inventory for select using (true);

-- ADDRESSES
create table public.addresses (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  address_line_1 text not null,
  address_line_2 text,
  city text not null,
  state text not null,
  postal_code text not null,
  country text default 'India',
  is_default boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.addresses enable row level security;
create policy "Users can view own addresses." on addresses for select using (auth.uid() = user_id);
create policy "Users can insert own addresses." on addresses for insert with check (auth.uid() = user_id);
create policy "Users can update own addresses." on addresses for update using (auth.uid() = user_id);
create policy "Users can delete own addresses." on addresses for delete using (auth.uid() = user_id);

-- CART
create table public.cart (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles on delete cascade not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.cart enable row level security;
create policy "Users can view own cart." on cart for select using (auth.uid() = user_id);
create policy "Users can manage own cart." on cart for all using (auth.uid() = user_id);

-- CART ITEMS
create table public.cart_items (
  id uuid default uuid_generate_v4() primary key,
  cart_id uuid references public.cart on delete cascade not null,
  variant_id uuid references public.variants on delete cascade not null,
  quantity integer default 1 not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.cart_items enable row level security;
create policy "Users can view own cart items." on cart_items for select using (
  exists (select 1 from public.cart where id = cart_id and user_id = auth.uid())
);
create policy "Users can manage own cart items." on cart_items for all using (
  exists (select 1 from public.cart where id = cart_id and user_id = auth.uid())
);

-- COUPONS
create table public.coupons (
  id uuid default uuid_generate_v4() primary key,
  code text unique not null,
  discount_type text check (discount_type in ('percentage', 'fixed')),
  discount_value numeric not null,
  min_order_value numeric default 0,
  valid_from timestamp with time zone,
  valid_until timestamp with time zone,
  usage_limit integer,
  is_active boolean default true
);
alter table public.coupons enable row level security;
create policy "Coupons are viewable by everyone." on coupons for select using (true);

-- ORDERS
create table public.orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles on delete set null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'packed', 'shipped', 'delivered', 'cancelled', 'returned', 'refunded')),
  total_amount numeric not null,
  discount_amount numeric default 0,
  coupon_id uuid references public.coupons on delete set null,
  shipping_address_id uuid references public.addresses on delete set null,
  billing_address_id uuid references public.addresses on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.orders enable row level security;
create policy "Users can view own orders." on orders for select using (auth.uid() = user_id);
create policy "Users can insert own orders." on orders for insert with check (auth.uid() = user_id);

-- ORDER ITEMS
create table public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders on delete cascade not null,
  variant_id uuid references public.variants on delete set null,
  quantity integer not null,
  unit_price numeric not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.order_items enable row level security;
create policy "Users can view own order items." on order_items for select using (
  exists (select 1 from public.orders where id = order_id and user_id = auth.uid())
);

-- PAYMENTS
create table public.payments (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders on delete cascade not null,
  provider text check (provider in ('razorpay', 'cod')),
  transaction_id text,
  status text default 'pending' check (status in ('pending', 'success', 'failed', 'refunded')),
  amount numeric not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.payments enable row level security;
create policy "Users can view own payments." on payments for select using (
  exists (select 1 from public.orders where id = order_id and user_id = auth.uid())
);

-- WISHLIST
create table public.wishlist (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  product_id uuid references public.products on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, product_id)
);
alter table public.wishlist enable row level security;
create policy "Users can manage own wishlist." on wishlist for all using (auth.uid() = user_id);

-- REVIEWS
create table public.reviews (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles on delete set null,
  product_id uuid references public.products on delete cascade not null,
  rating integer check (rating >= 1 and rating <= 5) not null,
  comment text,
  is_approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.reviews enable row level security;
create policy "Approved reviews are viewable by everyone." on reviews for select using (is_approved = true);
create policy "Users can view own unapproved reviews." on reviews for select using (auth.uid() = user_id);
create policy "Users can insert own reviews." on reviews for insert with check (auth.uid() = user_id);

-- NOTIFICATIONS
create table public.notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles on delete cascade not null,
  title text not null,
  message text not null,
  is_read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.notifications enable row level security;
create policy "Users can manage own notifications." on notifications for all using (auth.uid() = user_id);
