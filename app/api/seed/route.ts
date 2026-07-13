import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { handleApiError } from '@/lib/utils/errorHandler';

export async function GET() {
  try {
    const supabase = await createClient();
    
    const { data: product, error: productError } = await supabase
      .from('products')
      .insert([
        {
          title: 'White Classic Tank Top',
          slug: 'white-classic-tank-top',
          description: 'A classic white tank top, perfect for everyday wear.',
          base_price: 499,
          is_active: true,
        }
      ])
      .select()
      .single();

    if (productError) {
      return handleApiError(productError, 'Seed Route - Insert Product');
    }

    const { error: imageError } = await supabase
      .from('product_images')
      .insert([
        {
          product_id: product.id,
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=800',
          is_primary: true,
        }
      ]);

    if (imageError) {
      return handleApiError(imageError, 'Seed Route - Insert Image');
    }

    return NextResponse.json({ success: true, product });
  } catch (error) {
    return handleApiError(error, 'Seed Route - Unhandled');
  }
}
