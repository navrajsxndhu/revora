import { CleanupQueue, ReportQueue } from './registry';

/**
 * Enterprise Job Scheduler
 * Bootstraps recurring jobs (cron equivalents) into the BullMQ ecosystem.
 */
export async function bootstrapScheduler() {
  console.log('Bootstrapping Enterprise Scheduler...');

  // Nightly Database Cleanup
  await CleanupQueue.add(
    'nightly-cleanup',
    { target: 'all' },
    {
      repeat: {
        pattern: '0 2 * * *', // Every day at 2:00 AM
      },
    }
  );

  // Weekly Enterprise Status Report
  await ReportQueue.add(
    'weekly-system-report',
    { reportType: 'SYSTEM_HEALTH' },
    {
      repeat: {
        pattern: '0 6 * * 1', // Every Monday at 6:00 AM
      }
    }
  );

  console.log('Enterprise Scheduler Bootstrapped.');
}
