export type PlanLevel = 'FREE' | 'PRO' | 'ENTERPRISE';

export interface PlanLimits {
  members: number;
  incidentsPerMonth: number;
  orchestrationEnabled: boolean;
  slackEnabled: boolean;
  cliEnabled: boolean;
  pirExportsEnabled: boolean;
}

export const PLANS: Record<PlanLevel, PlanLimits> = {
  FREE: {
    members: 3,
    incidentsPerMonth: 100,
    orchestrationEnabled: false,
    slackEnabled: false,
    cliEnabled: false,
    pirExportsEnabled: false
  },
  PRO: {
    members: 20,
    incidentsPerMonth: 10000,
    orchestrationEnabled: true,
    slackEnabled: true,
    cliEnabled: true,
    pirExportsEnabled: true
  },
  ENTERPRISE: {
    members: 999999,
    incidentsPerMonth: 999999,
    orchestrationEnabled: true,
    slackEnabled: true,
    cliEnabled: true,
    pirExportsEnabled: true
  }
};

export function getPlanLevelByPriceId(priceId: string | null): PlanLevel {
  if (priceId === process.env.STRIPE_PRO_PRICE_ID) return 'PRO';
  if (priceId === process.env.STRIPE_ENT_PRICE_ID) return 'ENTERPRISE';
  return 'FREE';
}
