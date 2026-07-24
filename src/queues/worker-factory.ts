import { Worker, WorkerOptions, Processor, Job } from 'bullmq';
import { getRedisClient } from '@/lib/redis';
import { prisma } from '@/lib/prisma';

export function createWorker<T = any, R = any>(
  queueName: string, 
  processor: Processor<T, R>, 
  options?: Omit<WorkerOptions, 'connection'>
): Worker<T, R> {
  const connection = getRedisClient();

  const worker = new Worker<T, R>(queueName, processor, {
    connection: connection as any,
    concurrency: 5,
    ...options
  });

  worker.on('failed', async (job: Job | undefined, err: Error) => {
    if (!job) return;
    
    // Check if the job has permanently failed (exhausted all retries)
    if (job.attemptsMade >= (job.opts.attempts || 1)) {
      try {
        console.error(`Job ${job.id} in ${queueName} permanently failed. Moving to DLQ.`);
        await prisma.deadLetterJob.create({
          data: {
            jobId: job.id || 'unknown',
            queueName,
            payload: JSON.stringify(job.data),
            errorMsg: err.message,
            stackTrace: err.stack,
            attemptsMade: job.attemptsMade,
          }
        });
      } catch (dlqErr) {
        console.error('Failed to write to Dead Letter Queue in Prisma:', dlqErr);
      }
    }
  });

  worker.on('error', err => {
    // Catch generic worker errors like connection drops
    console.error(`Worker error on queue ${queueName}:`, err);
  });

  return worker;
}
