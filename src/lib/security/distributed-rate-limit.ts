import { prisma } from "../prisma";
// We mock ioredis connection for the demonstration, assuming a Redis store exists
import Redis from 'ioredis';

// Fallback mock if no REDIS_URL is provided
const isMock = !process.env.REDIS_URL;
const redisMock = new Map<string, number>();

const redis = isMock ? null : new Redis(process.env.REDIS_URL as string);

export async function checkDistributedRateLimit(workspaceId: string, identifier: string, route: string, limit: number, windowSec: number): Promise<boolean> {
  const key = `ratelimit:${workspaceId}:${route}:${identifier}`;
  const now = Date.now();
  const windowMs = windowSec * 1000;
  const currentWindow = Math.floor(now / windowMs);
  const windowKey = `${key}:${currentWindow}`;

  let count = 0;
  
  if (isMock) {
    count = (redisMock.get(windowKey) || 0) + 1;
    redisMock.set(windowKey, count);
    
    // cleanup old keys pseudo-implementation
    for (const k of redisMock.keys()) {
      if (k.startsWith(key) && k !== windowKey) {
        redisMock.delete(k);
      }
    }
  } else {
    // Atomic increment and expire in real Redis
    count = await redis!.incr(windowKey);
    if (count === 1) {
      await redis!.expire(windowKey, windowSec * 2); 
    }
  }

  if (count > limit) {
    // Record breach in Audit / RateLimit table
    prisma.rateLimitEvent.create({
      data: {
        workspaceId,
        route,
        identifier
      }
    }).catch(e => console.error("Failed to log rate limit event", e));

    return false;
  }

  return true;
}
