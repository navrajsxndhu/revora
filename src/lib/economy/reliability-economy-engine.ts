import { prisma } from '@/lib/prisma';
import { appendLedgerEvent, EventType } from './budget-ledger';
import { calculateBurnRate } from './burn-rate-engine';
import { recalculateVelocityQuota } from './velocity-quotas';
import { recalculateOperationalDebt } from './operational-debt';
import { calculateStabilityMarketScores } from './stability-market';

export async function initializeEconomyForService(workspaceId: string, service: string) {
  let budget = await prisma.reliabilityBudget.findUnique({
    where: { workspaceId_service: { workspaceId, service } }
  });

  if (!budget) {
    budget = await prisma.reliabilityBudget.create({
      data: { workspaceId, service }
    });
  }

  return budget;
}

export async function orchestrateEconomicEvent(
  workspaceId: string, 
  service: string, 
  eventType: EventType, 
  impact: { cost?: number; credit?: number; debt?: number; tax?: number }
) {
  // 1. Ensure initialized
  await initializeEconomyForService(workspaceId, service);

  // 2. Append ledger event
  await appendLedgerEvent({
    workspaceId,
    service,
    eventType,
    reliabilityCost: impact.cost,
    operationalCredit: impact.credit,
    debtImpact: impact.debt,
    governanceTax: impact.tax,
  });

  // 3. Update current budget synchronously
  const netImpact = (impact.credit ?? 0) - (impact.cost ?? 0) - (impact.tax ?? 0);
  
  await prisma.reliabilityBudget.update({
    where: { workspaceId_service: { workspaceId, service } },
    data: {
      currentBudget: { increment: netImpact }
    }
  });

  // 4. Recalculate derived metrics
  await calculateBurnRate(workspaceId, service);
  await recalculateOperationalDebt(workspaceId, service);
  await calculateStabilityMarketScores(workspaceId);
  await recalculateVelocityQuota(workspaceId, service);
}
