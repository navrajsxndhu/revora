import { ApiTrace, Incident, VercelDeploymentPayload } from "../engine/execution-contracts";
import { prisma } from "@/lib/prisma";
import { sendSlackOperationalAlert } from "../integrations/slack-notifier";

export async function generateDeploymentFailureIncident(
  trace: ApiTrace,
  payload: VercelDeploymentPayload
) {
  
  // 1. Write the trace to Prisma
  await prisma.apiTrace.create({
    data: {
      workspaceId: "system",
      id: trace.id,
      workflowExecutionId: trace.workflowExecutionId,
      nodeId: trace.nodeId,
      status: trace.status,
      latencyMs: trace.latencyMs,
      requestPayload: JSON.stringify(trace.requestPayload),
      errorMessage: trace.errorMessage,
      timestamp: trace.timestamp,
    }
  });

  // 2. Simulate AI Analysis
  const aiAnalysis = {
    rootCauseSummary: `Deployment likely failed during Vercel build step for target ${payload.payload.target || 'production'}.`,
    probableCommit: payload.payload.deployment.meta?.githubCommitSha || null,
    recommendedAction: "Inspect Vercel build logs and ensure all environment variables are present.",
  };

  // 3. Create Incident in Prisma
  const incident = await prisma.incident.create({
    data: {
      workspaceId: "system",
      id: crypto.randomUUID(),
      title: `Deployment Failure: ${payload.payload.deployment.name}`,
      description: `A deployment error was detected for ${payload.payload.deployment.url}`,
      state: "OPEN",
      relatedTraceId: trace.id,
      rootCauseSummary: aiAnalysis.rootCauseSummary,
      recommendedAction: aiAnalysis.recommendedAction,
      probableCommit: aiAnalysis.probableCommit || undefined,
    }
  });

  // 4. Trigger real integrations
  await sendSlackOperationalAlert({
    id: incident.id,
    title: incident.title,
    description: incident.description,
    state: incident.state as any,
    relatedTraceId: incident.relatedTraceId,
    rootCauseSummary: incident.rootCauseSummary || undefined,
    recommendedAction: incident.recommendedAction || undefined,
    probableCommit: incident.probableCommit || undefined,
    createdAt: incident.createdAt,
    updatedAt: incident.updatedAt,
  });

  return incident;
}
