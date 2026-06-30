import { prisma } from '@/lib/prisma';

export async function calculateStabilityMarketScores(workspaceId: string) {
  const budgets = await prisma.reliabilityBudget.findMany({
    where: { workspaceId }
  });

  const profiles = await prisma.operationalDebtProfile.findMany({
    where: { workspaceId }
  });

  const profileMap = new Map(profiles.map(p => [p.service, p]));

  // Compare services and rank them
  for (const budget of budgets) {
    const profile = profileMap.get(budget.service);
    if (!profile) continue;

    // High debt lowers stability score, high burn rate lowers it
    const debtPenalty = profile.debtScore * 0.5;
    const burnPenalty = budget.burnRate * 0.2;
    
    let newStabilityScore = 100 - debtPenalty - burnPenalty;
    newStabilityScore = Math.max(0, Math.min(100, newStabilityScore));

    await prisma.reliabilityBudget.update({
      where: { id: budget.id },
      data: { stabilityScore: newStabilityScore }
    });
  }
}
