import { prisma } from "../prisma";
import { calculateAdaptiveBudgetPenalty } from "../nervous-system/adaptive-budgets";

export async function evaluateReliabilityBudget(workspaceId: string, serviceName: string) {
  // Pull rolling 30-day window
  const windowDate = new Date();
  windowDate.setDate(windowDate.getDate() - 30);

  const deployments = await prisma.deployment.findMany({
    where: { workspaceId, serviceName, createdAt: { gte: windowDate } },
    include: { incidents: true }
  });

  let penalty = 0;
  let incidentCount = 0;
  let rollbackCount = 0;

  for (const d of deployments) {
    incidentCount += d.incidents.length;
    if (d.rollbackCount > 0) rollbackCount++;
  }

  // Weight penalties based on Phase 92 prompt rules
  penalty += Math.min(30, incidentCount * 10);
  penalty += Math.min(25, rollbackCount * 12);

  // Hook in Phase 95 Adaptive Nervous System Penalty
  const adaptivePenalty = await calculateAdaptiveBudgetPenalty(workspaceId);
  penalty += adaptivePenalty;
  
  // Base budget is 100
  const budget = Math.max(0, 100 - penalty);
  
  let state = 'SAFE';
  if (budget <= 30) state = 'FROZEN';
  else if (budget <= 60) state = 'RESTRICTED';
  else if (budget <= 80) state = 'WATCHLIST';

  // Upsert the service governance state
  await prisma.serviceGovernance.upsert({
    where: { workspaceId_serviceName: { workspaceId, serviceName } },
    create: { workspaceId, serviceName, reliabilityBudget: budget, rolloutRestrictionLevel: state },
    update: { reliabilityBudget: budget, rolloutRestrictionLevel: state }
  });

  return { budget, state };
}
