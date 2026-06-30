import { Worker } from 'bullmq';
import Redis from 'ioredis';
import { prisma } from '@/lib/prisma';
import { sendSlackOperationalAlert, appendSlackThreadMessage } from '@/lib/integrations/slack-notifier';

const redisUrl = process.env.REDIS_URL;

export const createNotificationWorker = () => {
  if (!redisUrl) return null;

  const connection = new Redis(redisUrl, { maxRetriesPerRequest: null });

  const worker = new Worker('notification-queue', async (job) => {
    const { incidentId, executionId, isGroupedUpdate, groupedCount, isSymptomUpdate, symptomService, probableRootService } = job.data;

    const incident = await prisma.incident.findUnique({ where: { id: incidentId } });
    if (!incident) throw new Error(`Incident ${incidentId} not found`);

    if (isSymptomUpdate && incident.slackThreadTs) {
      await prisma.auditLog.create({
        data: {
          workspaceId: "system",
          executionId,
          eventType: 'SLACK_ALERT_SENDING',
          status: 'SUCCESS',
          message: `Attempting to send symptom update to Root Cause Incident ${incident.id}`,
        }
      });
      await appendSlackThreadMessage(incident.slackThreadTs, `⚠️ *Symptom Alert Suppressed.* ${symptomService} failure linked to existing ${probableRootService} outage.`);
    } else if (isGroupedUpdate && incident.slackThreadTs) {
      await prisma.auditLog.create({
        data: {
          workspaceId: "system",
          executionId,
          eventType: 'SLACK_ALERT_SENDING',
          status: 'SUCCESS',
          message: `Attempting to send threaded Slack update for Incident ${incident.id}`,
        }
      });
      await appendSlackThreadMessage(incident.slackThreadTs, `⚠️ *Duplicate Alert Suppressed.* ${groupedCount - 1} additional failures detected for this service.`);
    } else {
      await prisma.auditLog.create({
        data: {
          workspaceId: "system",
          executionId,
          eventType: 'SLACK_ALERT_SENDING',
          status: 'SUCCESS',
          message: `Attempting to send Slack alert for Incident ${incident.id}`,
        }
      });

      const threadTs = await sendSlackOperationalAlert(incident as any);
      
      if (threadTs && !incident.slackThreadTs) {
        await prisma.incident.update({
          where: { id: incident.id },
          data: { slackThreadTs: threadTs }
        });
      }
    }

    // Finalize Execution
    await prisma.workflowExecution.update({
      where: { id: executionId },
      data: { 
        state: 'COMPLETED',
        completedAt: new Date(),
      }
    });

    await prisma.auditLog.create({
      data: {
        workspaceId: "system",
        executionId,
        eventType: 'EXECUTION_COMPLETED',
        status: 'SUCCESS',
        message: `Workflow execution completed successfully.`,
      }
    });

  }, { 
    connection: connection as any,
    // Add retry logic with exponential backoff
    settings: {
      backoffStrategy: (attemptsMade: number) => Math.pow(2, attemptsMade) * 1000,
    }
  });

  worker.on('failed', async (job, err) => {
    if (job) {
      await prisma.workflowExecution.update({
        where: { id: job.data.executionId },
        data: { 
          state: job.attemptsMade >= (job.opts.attempts || 3) ? 'FAILED' : 'RETRYING',
          failureReason: err.message,
          retryCount: { increment: 1 }
        }
      });
      await prisma.auditLog.create({
        data: {
          workspaceId: "system",
          executionId: job.data.executionId,
          eventType: 'NOTIFICATION_FAILED',
          status: 'ERROR',
          message: `Failed to send alert (Attempt ${job.attemptsMade}): ${err.message}`,
        }
      });
    }
  });

  return worker;
};
