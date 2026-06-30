import { prisma } from "../prisma";

export type RolloutStrategy = 'SAFE_DIRECT_DEPLOY' | 'CANARY_REQUIRED' | 'PARTIAL_ROLLOUT_REQUIRED' | 'MANUAL_APPROVAL_REQUIRED' | 'DEPLOYMENT_BLOCKED';

export async function simulateDeploymentRisk(workspaceId: string, serviceName: string, category: string) {
  // Pull historical deployments for this service
  const pastDeployments = await prisma.deployment.findMany({
    where: { workspaceId, serviceName },
    include: { incidents: true },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  let rollbackCount = 0;
  let incidentCount = 0;

  for (const d of pastDeployments) {
    if (d.rollbackCount > 0) rollbackCount++;
    incidentCount += d.incidents.length;
  }

  const rollbackFrequency = pastDeployments.length > 0 ? rollbackCount / pastDeployments.length : 0;
  
  let recommendation: RolloutStrategy = 'SAFE_DIRECT_DEPLOY';
  let reason = 'Historical deployment patterns for this service indicate low operational risk.';

  if (rollbackFrequency > 0.3 || category === 'Database Migration') {
    recommendation = 'DEPLOYMENT_BLOCKED';
    reason = `Unsafe pattern detected: Rollback frequency is ${(rollbackFrequency*100).toFixed(0)}% (exceeds 30% safe threshold).`;
  } else if (rollbackFrequency > 0.15 || incidentCount > 2) {
    recommendation = 'CANARY_REQUIRED';
    reason = `Moderate risk: Service history shows ${incidentCount} recent incidents. Canary rollout mandated to limit potential blast radius.`;
  } else if (category === 'Background Worker') {
    recommendation = 'PARTIAL_ROLLOUT_REQUIRED';
    reason = `Worker deployments require partial rollout to ensure queue stability before full cutover.`;
  }

  return {
    serviceName,
    rollbackFrequency,
    simulatedIncidentProbability: Math.min(100, Math.round(rollbackFrequency * 150)), // deterministic mock logic
    recommendation,
    reason
  };
}
