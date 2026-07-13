import { type NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/lib/utils/rateLimit'

// Configurable thresholds, defaulting if env vars aren't set yet
const API_RATE_LIMIT = parseInt(process.env.RATE_LIMIT_API || '60', 10);
const AUTH_RATE_LIMIT = parseInt(process.env.RATE_LIMIT_AUTH || '5', 10);

export async function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? '127.0.0.1';
  const path = request.nextUrl.pathname;
  
  // Stricter rate limits for auth routes
  if (path.startsWith('/api/auth') || path.startsWith('/login') || path.startsWith('/signup')) {
    const { success, headers } = rateLimit(ip, 'auth', { max: AUTH_RATE_LIMIT, windowMs: 60 * 1000 });
    if (!success) {
      return new NextResponse(JSON.stringify({ error: "Too many authentication attempts. Please try again later." }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', ...Object.fromEntries(headers) }
      });
    }
  } 
  // Standard rate limits for API routes
  else if (path.startsWith('/api/')) {
    const { success, headers } = rateLimit(ip, 'api', { max: API_RATE_LIMIT, windowMs: 60 * 1000 });
    if (!success) {
      return new NextResponse(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', ...Object.fromEntries(headers) }
      });
    }
  }

  // Continue to standard next response
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
