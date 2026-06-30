import { prisma } from '@/lib/prisma';

export async function recalculateVelocityQuota(workspaceId: string, service: string) {
  const budget = await prisma.reliabilityBudget.findUnique({
    where: { workspaceId_service: { workspaceId, service } }
  });
  
  if (!budget) return;

  let newQuota = 10; // BASE
  
  if (budget.exhaustionRisk === 'CRITICAL') {
    newQuota = 0; // FROZEN
  } else if (budget.exhaustionRisk === 'UNSAFE') {
    newQuota = 2; // THROTTLED
  } else if (budget.exhaustionRisk === 'AGGRESSIVE') {
    newQuota = 5;
  } else if (budget.stabilityScore > 90) {
    newQuota = 20; // HIGH
  }

  if (budget.deploymentQuota !== newQuota) {
    await prisma.reliabilityBudget.update({
      where: { workspaceId_service: { workspaceId, service } },
      data: { deploymentQuota: newQuota }
    });
  }

  return newQuota;
}
