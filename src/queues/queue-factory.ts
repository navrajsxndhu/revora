import { Queue, QueueOptions } from 'bullmq';
import { getRedisClient } from '@/lib/redis';

/**
 * Creates and registers a BullMQ Queue connected to our standardized Redis client.
 */
export function createQueue<T = any>(name: string, options?: Omit<QueueOptions, 'connection'>) {
  const connection = getRedisClient();
  
  return new Queue<T>(name, {
    connection: connection as any,
    defaultJobOptions: {
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 2000,
      },
      removeOnComplete: {
        age: 3600, // keep for 1 hour
        count: 1000, // keep max 1000
      },
      removeOnFail: {
        age: 24 * 3600 * 7, // keep failures for 7 days
      }
    },
    ...options
  });
}
