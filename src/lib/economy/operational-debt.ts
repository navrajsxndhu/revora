import { prisma } from '@/lib/prisma';
import { getLedgerHistory } from './budget-ledger';

export async function recalculateOperationalDebt(workspaceId: string, service: string) {
  let profile = await prisma.operationalDebtProfile.findUnique({
    where: { workspaceId_service: { workspaceId, service } }
  });

  if (!profile) {
    profile = await prisma.operationalDebtProfile.create({
      data: {
        workspaceId,
        service,
      }
    });
  }

  const history = await getLedgerHistory(workspaceId, service);
  
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  let recentDebt = 0;
  for (const event of history) {
    if (event.createdAt >= thirtyDaysAgo) {
      recentDebt += event.debtImpact + event.governanceTax;
    }
  }

  const newDebtScore = recentDebt; // Simplify: rolling 30-day debt window

  await prisma.operationalDebtProfile.update({
    where: { workspaceId_service: { workspaceId, service } },
    data: { debtScore: newDebtScore }
  });

  return newDebtScore;
}
