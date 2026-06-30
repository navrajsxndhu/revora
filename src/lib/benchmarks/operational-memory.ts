import { prisma } from "@/lib/prisma";
import { Incident } from "@prisma/client";

export type HistoricalInsight = {
  previousOccurrences: number;
  mostSuccessfulAction: string | null;
  averageRecoveryTime: number;
  recurringDeployment: string | null;
  rollbackTypicallyRequired: boolean;
};

export async function getHistoricalInsights(incident: Incident): Promise<HistoricalInsight | null> {
  if (!incident.serviceAffected) return null;

  // Find past incidents matching this service (and optionally failureSignature if available)
  const pastIncidents = await prisma.incident.findMany({
    where: {
      serviceAffected: incident.serviceAffected,
      id: { not: incident.id },
      isSymptom: false
    },
    orderBy: { createdAt: 'desc' },
    take: 20
  });

  if (pastIncidents.length === 0) return null;

  let totalResolutionTime = 0;
  let resolvedCount = 0;
  let rollbacks = 0;
  const actions: Record<string, number> = {};
  const deployments: Record<string, number> = {};

  for (const past of pastIncidents) {
    if ((past as any).resolvedAt && past.createdAt && (past as any).resolvedSuccessfully) {
      totalResolutionTime += ((past as any).resolvedAt.getTime() - past.createdAt.getTime());
      resolvedCount++;

      if (past.recommendedAction) {
        actions[past.recommendedAction] = (actions[past.recommendedAction] || 0) + 1;
      }
    }
    if (past.rollbackTriggered) {
      rollbacks++;
    }
    if (past.deploymentId) {
      deployments[past.deploymentId] = (deployments[past.deploymentId] || 0) + 1;
    }
  }

  let mostSuccessfulAction = null;
  let maxActionCount = 0;
  for (const [action, count] of Object.entries(actions)) {
    if (count > maxActionCount) {
      mostSuccessfulAction = action;
      maxActionCount = count;
    }
  }

  let recurringDeployment = null;
  let maxDepCount = 0;
  for (const [dep, count] of Object.entries(deployments)) {
    if (count > maxDepCount && count >= 2) {
      recurringDeployment = dep;
      maxDepCount = count;
    }
  }

  return {
    previousOccurrences: pastIncidents.length,
    mostSuccessfulAction,
    averageRecoveryTime: resolvedCount > 0 ? Math.round((totalResolutionTime / resolvedCount) / 60000) : 0,
    recurringDeployment,
    rollbackTypicallyRequired: (rollbacks / pastIncidents.length) > 0.5
  };
}
