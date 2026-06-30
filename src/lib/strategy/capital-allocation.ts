import { prisma } from '@/lib/prisma';

export async function calculateCapitalAllocation(workspaceId: string) {
  const budgets = await prisma.reliabilityBudget.findMany({ where: { workspaceId } });
  
  for (const budget of budgets) {
    let weight = 1.0;
    let priority = 'NORMAL';
    let alloc = budget.currentBudget;

    if (budget.exhaustionRisk === 'CRITICAL') {
      weight = 0.1;
      priority = 'FROZEN';
      alloc = Math.max(0, alloc - 500); // Penalty
    } else if (budget.exhaustionRisk === 'SUSTAINABLE') {
      weight = 1.5;
      priority = 'HIGH_VELOCITY';
      alloc += 200; // Bonus
    }

    await prisma.reliabilityCapitalAllocation.upsert({
      where: { workspaceId_service: { workspaceId, service: budget.service } },
      create: {
        workspaceId,
        service: budget.service,
        allocatedCapital: alloc,
        deploymentWeight: weight,
        governancePriority: priority,
        exhaustionRisk: budget.exhaustionRisk
      },
      update: {
        allocatedCapital: alloc,
        deploymentWeight: weight,
        governancePriority: priority,
        exhaustionRisk: budget.exhaustionRisk
      }
    });
  }
}
