import { prisma } from '@/lib/prisma';

export async function simulateStrategy(workspaceId: string, scenario: 'AGGRESSIVE_SCALING' | 'RELEASE_COMPRESSION' | 'REGIONAL_OUTAGE') {
  const snapshots = await prisma.reliabilityTreasurySnapshot.findMany({
    where: { workspaceId },
    orderBy: { capturedAt: 'desc' },
    take: 1
  });

  const current = snapshots[0];
  if (!current) return null;

  let projectedBurn = current.organizationalBurnRate;
  let projectedDebt = current.debtExposure;

  if (scenario === 'AGGRESSIVE_SCALING') {
    projectedBurn *= 2.0;
    projectedDebt *= 1.2;
  } else if (scenario === 'RELEASE_COMPRESSION') {
    projectedBurn *= 1.5;
    projectedDebt *= 1.5;
  } else if (scenario === 'REGIONAL_OUTAGE') {
    projectedBurn += 500; // Flat penalty
    projectedDebt += 300;
  }

  const daysToDepletion = projectedBurn > 0 ? (current.availableCapital / projectedBurn) : -1;

  return {
    scenario,
    projectedBurn,
    projectedDebt,
    daysToDepletion,
    warning: daysToDepletion > 0 && daysToDepletion < 7 ? 'CRITICAL_RISK' : 'SUSTAINABLE'
  };
}
