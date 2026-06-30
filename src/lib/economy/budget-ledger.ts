import { prisma } from '@/lib/prisma';

export type EventType = 
  | 'DEPLOYMENT_SPEND'
  | 'INCIDENT_DEBT'
  | 'ROLLBACK_PENALTY'
  | 'STABILITY_REWARD'
  | 'GOVERNANCE_TAX'
  | 'VELOCITY_BONUS';

export interface LedgerEventParams {
  workspaceId: string;
  service: string;
  team?: string;
  eventType: EventType;
  reliabilityCost?: number;
  operationalCredit?: number;
  debtImpact?: number;
  governanceTax?: number;
}

export async function appendLedgerEvent(params: LedgerEventParams) {
  return await prisma.reliabilityLedgerEvent.create({
    data: {
      workspaceId: params.workspaceId,
      service: params.service,
      team: params.team,
      eventType: params.eventType,
      reliabilityCost: params.reliabilityCost ?? 0,
      operationalCredit: params.operationalCredit ?? 0,
      debtImpact: params.debtImpact ?? 0,
      governanceTax: params.governanceTax ?? 0,
    }
  });
}

export async function getLedgerHistory(workspaceId: string, service: string) {
  return await prisma.reliabilityLedgerEvent.findMany({
    where: { workspaceId, service },
    orderBy: { createdAt: 'asc' }
  });
}
