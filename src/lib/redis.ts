import Redis from 'ioredis';

// Singleton instance
let redisInstance: Redis | null = null;

export function getRedisClient(): Redis {
  if (redisInstance) return redisInstance;

  const redisUrl = process.env.REDIS_URL;
  
  if (!redisUrl) {
    console.warn("WARNING: REDIS_URL is not defined. BullMQ and background jobs will fail if they are enqueued.");
    // We instantiate a dummy connection attempt that will just fail gracefully if actually used,
    // but won't crash the Next.js build or boot process.
    redisInstance = new Redis({
      host: 'localhost',
      port: 6379,
      maxRetriesPerRequest: null,
      retryStrategy(times) {
        // Stop retrying after 3 attempts to prevent infinite hang on local dev without Redis
        if (times >= 3) {
           return null;
        }
        return Math.min(times * 50, 2000);
      }
    });
    return redisInstance;
  }

  redisInstance = new Redis(redisUrl, {
    maxRetriesPerRequest: null, // Required by BullMQ
    retryStrategy(times) {
      return Math.min(times * 50, 2000);
    }
  });

  redisInstance.on('error', (err) => {
    console.error('Redis Client Error:', err);
  });

  return redisInstance;
}
