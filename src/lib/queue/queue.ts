import { Queue } from 'bullmq';
import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL;

let connection: Redis | null = null;

if (redisUrl && !redisUrl.includes('[REDACTED]')) {
  try {
    connection = new Redis(redisUrl, {
      maxRetriesPerRequest: null,
    });
    connection.on('error', (err) => {
      console.error('Redis connection error:', err);
    });
  } catch (err) {
    console.warn('Failed to parse REDIS_URL. BullMQ will fallback to simulated success.');
    connection = null;
  }
} else {
  console.warn('REDIS_URL is not defined or is redacted. BullMQ will fallback to simulated success in local dev.');
}

// Ensure queues don't crash if connection is null (by mocking them in dev if needed)
export const incidentAnalysisQueue = connection 
  ? new Queue('incident-analysis-queue', { connection: connection as any }) 
  : { add: async (name: string, data: any) => console.log(`[MOCK QUEUE] Added ${name} to incident analysis.`) };

export const notificationQueue = connection
  ? new Queue('notification-queue', { connection: connection as any }) 
  : { add: async (name: string, data: any) => console.log(`[MOCK QUEUE] Added ${name} to notification-queue`, data) };
