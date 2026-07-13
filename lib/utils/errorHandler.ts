import { NextResponse } from 'next/server';

/**
 * Standardized error handler that logs the full error to the server console
 * (for debugging and monitoring) but only returns a safe, generic message to the client.
 */
export function handleApiError(error: unknown, context: string = 'API Error') {
  // Log the full error server-side
  console.error(`[${context}]`, error);

  // Determine if it's a known operational error that's safe to expose,
  // otherwise return a generic 500 error.
  // In a real app, you might check if error is instance of a custom AppError class.

  return NextResponse.json(
    { error: "An internal server error occurred" },
    { status: 500 }
  );
}
