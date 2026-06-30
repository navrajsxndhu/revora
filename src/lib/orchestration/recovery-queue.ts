import { Queue } from 'bullmq';

const connection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
};

export const recoveryQueue = new Queue('RecoveryOrchestration', {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
    removeOnComplete: true,
    removeOnFail: false,
  }
});

export async function enqueueRecoveryTask(workspaceId: string, incidentId: string, steps: string[]) {
  return await recoveryQueue.add('recover', {
    workspaceId,
    incidentId,
    steps
  });
}
