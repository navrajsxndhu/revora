import { prisma } from '@/lib/prisma';

export async function simulateEconomy(workspaceId: string, service: string, scenario: 'AGGRESSIVE_RELEASE' | 'INCIDENT_SPIKE') {
  const budget = await prisma.reliabilityBudget.findUnique({
    where: { workspaceId_service: { workspaceId, service } }
  });

  if (!budget) return null;

  let simulatedBurnRate = budget.burnRate;
  
  if (scenario === 'AGGRESSIVE_RELEASE') {
    simulatedBurnRate *= 1.5; // Simulate 50% increase in burn
  } else if (scenario === 'INCIDENT_SPIKE') {
    simulatedBurnRate += 200; // Flat massive spike
  }

  // Calculate days until exhaustion based on simulated burn
  let daysUntilExhaustion = -1;
  if (simulatedBurnRate > 0) {
    daysUntilExhaustion = budget.currentBudget / simulatedBurnRate;
  }

  return {
    scenario,
    simulatedBurnRate,
    daysUntilExhaustion,
    currentBudget: budget.currentBudget
  };
}
