import { prisma } from '@/lib/prisma';

export async function calculateTreasurySnapshot(workspaceId: string) {
  const budgets = await prisma.reliabilityBudget.findMany({ where: { workspaceId } });
  
  let availableCapital = 0;
  let organizationalBurnRate = 0;

  for (const b of budgets) {
    availableCapital += b.currentBudget;
    organizationalBurnRate += b.burnRate;
  }

  // Reserve is 20% of available
  const reservedCapital = Math.floor(availableCapital * 0.2);
  availableCapital -= reservedCapital;

  // Debt exposure from profiles
  const profiles = await prisma.operationalDebtProfile.findMany({ where: { workspaceId } });
  const debtExposure = profiles.reduce((sum, p) => sum + p.debtScore, 0);

  const deploymentLiquidity = availableCapital > 0 ? (availableCapital / (organizationalBurnRate || 1)) : 0;

  await prisma.reliabilityTreasurySnapshot.create({
    data: {
      workspaceId,
      availableCapital,
      reservedCapital,
      debtExposure: Math.round(debtExposure),
      organizationalBurnRate,
      deploymentLiquidity
    }
  });
}
