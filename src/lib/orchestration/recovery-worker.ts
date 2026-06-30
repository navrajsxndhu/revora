import { Worker, Job } from 'bullmq';
import { prisma } from '../prisma';
import { publishFederatedEvent } from '../network/federation-engine';
import { routeRecoveryExecution } from '../nervous-system/recovery-router';

const connection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
};

export const recoveryWorker = new Worker('RecoveryOrchestration', async (job: Job) => {
  const { workspaceId, incidentId, steps } = job.data;
  
  // Create or fetch RecoveryExecution
  let execution = await prisma.recoveryExecution.findFirst({
    where: { incidentId }
  });

  if (!execution) {
    execution = await prisma.recoveryExecution.create({
      data: {
        workspaceId,
        incidentId,
        totalSteps: steps.length,
        state: 'ACTIVE',
        startedAt: new Date()
      }
    });
  } else if (execution.state === 'FAILED' || execution.state === 'STALLED') {
    execution = await prisma.recoveryExecution.update({
      where: { id: execution.id },
      data: { state: 'ACTIVE', retries: { increment: 1 } }
    });
  }

  // Idempotently process remaining steps
  for (let i = execution.currentStep; i < steps.length; i++) {
    const step = steps[i];
    console.log(`[Worker] Executing recovery step ${i + 1}/${steps.length} for Incident ${incidentId}: ${step}`);
    
    // ... logic to execute recovery step ...
    // Simulate work
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Commit progress
    execution = await prisma.recoveryExecution.update({
      where: { id: execution.id },
      data: { currentStep: i + 1 }
    });
  }

  await prisma.recoveryExecution.update({
    where: { id: execution.id },
    data: { state: 'COMPLETED', completedAt: new Date() }
  });

  await publishFederatedEvent(workspaceId, "us-east-1", "ORCHESTRATION_COMPLETED", { incidentId });

  return { success: true };
}, { connection });

recoveryWorker.on('failed', async (job, err) => {
  if (job) {
    const { incidentId } = job.data;
    const execution = await prisma.recoveryExecution.findFirst({ where: { incidentId } });
    if (execution) {
      await prisma.recoveryExecution.update({
        where: { id: execution.id },
        data: { state: 'FAILED' }
      });
    }
    console.error(`[Worker] Recovery failed for incident ${incidentId}: ${err.message}`);
    if (job.data.workspaceId) {
      await routeRecoveryExecution(job.data.workspaceId, incidentId, "us-east-1");
    }
  }
});
