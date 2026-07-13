import { z } from 'zod';
import { NextResponse } from 'next/server';

/**
 * Validates a JSON request body against a Zod schema.
 * Returns the parsed data if successful, or a generic 400 response if it fails.
 */
export async function validateRequest<T>(
  request: Request,
  schema: z.ZodSchema<T>
): Promise<{ data: T; error: null } | { data: null; error: NextResponse }> {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      // We log the detailed error server-side to avoid leaking schema specifics to malicious actors
      console.error('Validation error:', result.error.flatten());
      return { 
        data: null, 
        error: NextResponse.json({ error: "Invalid request payload" }, { status: 400 }) 
      };
    }

    return { data: result.data, error: null };
  } catch (err) {
    console.error('Failed to parse request JSON:', err);
    return { 
      data: null, 
      error: NextResponse.json({ error: "Invalid request payload" }, { status: 400 }) 
    };
  }
}
