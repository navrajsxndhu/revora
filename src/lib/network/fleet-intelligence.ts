import { prisma } from "../prisma";

export async function aggregateFleetIntelligence(workspaceId: string) {
  const gov = await prisma.serviceGovernance.findMany({
    where: { workspaceId }
  });

  let totalDebt = 0;
  let frozenCount = 0;
  let restrictedCount = 0;

  for (const g of gov) {
    totalDebt += (100 - g.reliabilityBudget);
    if (g.rolloutRestrictionLevel === 'FROZEN') frozenCount++;
    if (g.rolloutRestrictionLevel === 'RESTRICTED') restrictedCount++;
  }

  const avgDebt = gov.length > 0 ? totalDebt / gov.length : 0;
  const fleetState = avgDebt > 50 ? 'CRITICAL' : avgDebt > 30 ? 'DEGRADED' : 'HEALTHY';

  return {
    avgReliabilityDebt: Math.round(avgDebt),
    frozenServices: frozenCount,
    restrictedServices: restrictedCount,
    fleetState
  };
}
