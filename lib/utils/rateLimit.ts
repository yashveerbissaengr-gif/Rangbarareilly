// A simple in-memory rate limiter for Edge/Serverless environments.
// NOTE: For distributed environments (like Vercel Edge), this state resets frequently.
// A Redis-backed solution (like @upstash/ratelimit) is recommended for production.

type RateLimitInfo = {
  count: number;
  resetTime: number;
};

const limits = new Map<string, RateLimitInfo>();

export interface RateLimitConfig {
  max: number; // Max requests per window
  windowMs: number; // Window size in milliseconds
}

export function rateLimit(ip: string, action: string, config: RateLimitConfig): { success: boolean; headers: Headers } {
  const key = `${action}:${ip}`;
  const now = Date.now();
  const info = limits.get(key);

  const headers = new Headers();
  headers.set('X-RateLimit-Limit', config.max.toString());

  if (!info || now > info.resetTime) {
    limits.set(key, { count: 1, resetTime: now + config.windowMs });
    headers.set('X-RateLimit-Remaining', (config.max - 1).toString());
    headers.set('X-RateLimit-Reset', new Date(now + config.windowMs).toUTCString());
    return { success: true, headers };
  }

  if (info.count >= config.max) {
    headers.set('X-RateLimit-Remaining', '0');
    headers.set('X-RateLimit-Reset', new Date(info.resetTime).toUTCString());
    // Apply exponential backoff dynamically (double the wait time) if abused
    limits.set(key, { count: info.count + 1, resetTime: now + (info.resetTime - now) * 2 });
    return { success: false, headers };
  }

  info.count += 1;
  headers.set('X-RateLimit-Remaining', (config.max - info.count).toString());
  headers.set('X-RateLimit-Reset', new Date(info.resetTime).toUTCString());
  return { success: true, headers };
}
