import { createClient } from '@/lib/supabase/server';

export async function getDashboardMetrics() {
  const supabase = await createClient();
  
  // Get total orders count
  const { count: ordersCount, error: ordersError } = await supabase
    .from('orders')
    .select('*', { count: 'exact', head: true });

  // Get active products count
  const { count: productsCount, error: productsError } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true);

  // Get total revenue
  // We can aggregate using raw SQL or by fetching all paid orders if it's small, 
  // but for now let's just sum it up from the orders table via RPC or simple fetch.
  // Using simple fetch for MVP if RPC isn't set up.
  const { data: orders, error: revError } = await supabase
    .from('orders')
    .select('total_amount')
    .neq('status', 'cancelled');
    
  const totalRevenue = orders?.reduce((acc, order) => acc + Number(order.total_amount), 0) || 0;

  // Recent Orders
  const { data: recentOrders, error: recentError } = await supabase
    .from('orders')
    .select('*, profiles(first_name, last_name)')
    .order('created_at', { ascending: false })
    .limit(5);

  return {
    totalOrders: ordersCount || 0,
    activeProducts: productsCount || 0,
    totalRevenue: totalRevenue,
    recentOrders: recentOrders || [],
  };
}
