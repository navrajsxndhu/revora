import { Worker } from 'bullmq';
import Redis from 'ioredis';
import { prisma } from '@/lib/prisma';
import { notificationQueue } from '../queue';
import { broadcastEvent } from '@/lib/events/emitter';
import { fetchCommitDiff } from '@/lib/integrations/github';
import { calculateSeverity, detectRecurringIssues, generateRecommendation } from '@/lib/incidents/intelligence';
import { findCorrelatedMasterIncident } from '@/lib/incidents/correlation';
import { evaluateRootCause } from '@/lib/incidents/root-cause';
import { incidentAnalysisQueue } from '../queue';

const redisUrl = process.env.REDIS_URL;

export const createIncidentWorker = () => {
  if (!redisUrl) return null;

  const connection = new Redis(redisUrl, { maxRetriesPerRequest: null });

  const worker = new Worker('incident-analysis-queue', async (job) => {
    const { traceId, executionId, payload } = job.data;

    await prisma.workflowExecution.update({
      where: { id: executionId },
      data: { state: 'PROCESSING' }
    });

    const commitSha = payload.payload?.deployment?.meta?.githubCommitSha || "unknown";
    const diff = await fetchCommitDiff("vercel", "next.js", "base-hash", commitSha); // mock owner/repo
    
    const recurringCount = await detectRecurringIssues(commitSha);
    const severity = calculateSeverity(recurringCount, "API Gateway");
    const recommendation = generateRecommendation(recurringCount);

    const aiAnalysis = {
      rootCauseSummary: "Environment variable NEXT_PUBLIC_API_URL is missing or malformed.",
      serviceAffected: "API Gateway",
      recommendedAction: recommendation,
      probableCommit: commitSha,
    };

    const masterIncident = await findCorrelatedMasterIncident(
      payload.payload?.deployment?.id,
      commitSha,
      aiAnalysis.serviceAffected
    );

    let incident;
    let isChild = false;

    if (masterIncident) {
      isChild = true;
      // Update Master Incident
      const newGroupedCount = masterIncident.groupedCount + 1;
      let newSeverity = masterIncident.severity;
      
      // Escalation Rule
      if (newGroupedCount >= 5 && masterIncident.severity === "MEDIUM") {
        newSeverity = "HIGH";
      } else if (newGroupedCount >= 10 && masterIncident.severity === "HIGH") {
        newSeverity = "CRITICAL";
      }

      await prisma.incident.update({
        where: { id: masterIncident.id },
        data: { 
          groupedCount: newGroupedCount,
          severity: newSeverity
        }
      });

      // Create as Child Incident
      incident = await prisma.incident.create({
        data: {
          workspaceId: "system",
          id: crypto.randomUUID(),
          title: `Duplicate Failure: ${payload.payload?.deployment?.name || 'Unknown'}`,
          description: `Correlated to ${masterIncident.id}`,
          state: "OPEN",
          severity,
          recurringCount,
          relatedTraceId: traceId,
          correlationId: commitSha,
          deploymentId: payload.payload?.deployment?.id,
          serviceAffected: aiAnalysis.serviceAffected,
          rootCauseSummary: aiAnalysis.rootCauseSummary,
          recommendedAction: aiAnalysis.recommendedAction,
          probableCommit: aiAnalysis.probableCommit,
          deploymentDiff: JSON.stringify(diff),
          masterIncidentId: masterIncident.id
        }
      });

      // Log deduplication
      await prisma.auditLog.create({
        data: {
          workspaceId: "system",
          executionId: "system",
          eventType: "INCIDENT_GROUPED",
          status: "INFO",
          message: `Grouped incoming failure as child of ${masterIncident.id}. Total: ${newGroupedCount + 1}`,
          actor: "System"
        }
      });

      broadcastEvent("INCIDENT_UPDATED", { incidentId: masterIncident.id, state: "OPEN" });
      
      // Use the master for notifications
      await notificationQueue.add('send-slack-alert', { 
        incidentId: masterIncident.id, 
        executionId, 
        isGroupedUpdate: true,
        groupedCount: newGroupedCount + 1
      });

    } else {
      const rootCause = await evaluateRootCause(aiAnalysis.serviceAffected);
      
      incident = await prisma.incident.create({
        data: {
          workspaceId: "system",
          id: crypto.randomUUID(),
          title: `Deployment Failure: ${payload.payload?.deployment?.name || 'Unknown'}`,
          description: `Deployment error detected for ${payload.payload?.deployment?.url || 'Unknown'}`,
          state: "OPEN",
          severity,
          recurringCount,
          relatedTraceId: traceId,
          correlationId: commitSha,
          deploymentId: payload.payload?.deployment?.id,
          serviceAffected: aiAnalysis.serviceAffected,
          rootCauseSummary: aiAnalysis.rootCauseSummary,
          recommendedAction: aiAnalysis.recommendedAction,
          probableCommit: aiAnalysis.probableCommit,
          deploymentDiff: JSON.stringify(diff),
          isSymptom: rootCause.isSymptom,
          rootCauseIncidentId: rootCause.rootCauseIncidentId,
          probableRootService: rootCause.probableRootService
        }
      });

      broadcastEvent("INCIDENT_UPDATED", { incidentId: incident.id, state: "OPEN" });

      if (rootCause.isSymptom && rootCause.rootCauseIncidentId) {
        // Suppress separate notification thread, use root cause thread
        await notificationQueue.add('send-slack-alert', { 
          incidentId: rootCause.rootCauseIncidentId, 
          executionId,
          isSymptomUpdate: true,
          symptomService: aiAnalysis.serviceAffected,
          probableRootService: rootCause.probableRootService
        });
      } else {
        await notificationQueue.add('send-slack-alert', { incidentId: incident.id, executionId });
      }
    }

    // PLAYBOOK RULE 1: Auto-Replay (Only for Master Incidents)
    if (recurringCount === 0 && !isChild) { // First time seeing this exact issue
      const newExecutionId = crypto.randomUUID();
      const newTraceId = crypto.randomUUID();
      
      await prisma.workflowExecution.create({
        data: { id: newExecutionId, workflowId: "deployment-intelligence-loop", state: "QUEUED", autoReplayed: true }
      });
      await prisma.apiTrace.create({
        data: { workspaceId: "system", id: newTraceId, workflowExecutionId: newExecutionId, nodeId: "auto-replay", status: "ERROR", latencyMs: 0, requestPayload: JSON.stringify(payload) }
      });
      
      await prisma.auditLog.create({
        data: { workspaceId: "system", executionId, eventType: "PLAYBOOK_TRIGGERED", status: "SUCCESS", message: `Auto-replayed incident ${incident.id}`, actor: "System" }
      });

      await incidentAnalysisQueue.add('analyze-failure', { traceId: newTraceId, executionId: newExecutionId, payload });
    }
  }, { connection: connection as any });

  worker.on('failed', async (job, err) => {
    if (job) {
      await prisma.workflowExecution.update({
        where: { id: job.data.executionId },
        data: { state: 'FAILED', failureReason: err.message, retryCount: { increment: 1 } }
      });
      broadcastEvent("EXECUTION_UPDATED", { executionId: job.data.executionId, state: "FAILED" });
    }
  });

  return worker;
};
