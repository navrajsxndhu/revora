import { prisma } from '@/lib/prisma';
import { getLedgerHistory } from './budget-ledger';

export async function calculateBurnRate(workspaceId: string, service: string) {
  const history = await getLedgerHistory(workspaceId, service);
  
  // A simple calculation based on recent spending
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  
  let totalCost = 0;
  for (const event of history) {
    if (event.createdAt >= thirtyDaysAgo) {
      totalCost += event.reliabilityCost;
      totalCost += event.debtImpact;
      totalCost += event.governanceTax;
      totalCost -= event.operationalCredit;
    }
  }

  // Calculate daily burn velocity
  const burnRate = Math.max(0, totalCost / 30);
  
  let exhaustionRisk = 'SUSTAINABLE';
  if (burnRate > 100) exhaustionRisk = 'CRITICAL';
  else if (burnRate > 50) exhaustionRisk = 'UNSAFE';
  else if (burnRate > 20) exhaustionRisk = 'AGGRESSIVE';

  await prisma.reliabilityBudget.update({
    where: { workspaceId_service: { workspaceId, service } },
    data: { 
      burnRate,
      exhaustionRisk
    }
  });

  return { burnRate, exhaustionRisk };
}
