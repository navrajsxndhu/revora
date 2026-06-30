import { prisma } from "../prisma";
import { getPlanLevelByPriceId, PLANS, PlanLevel } from "./plans";
import { getUsageForPeriod, getCurrentBillingPeriodId } from "./usage-meter";

export async function getWorkspacePlanContext(workspaceId: string) {
  const subscription = await prisma.subscription.findUnique({
    where: { workspaceId }
  });

  const planLevel: PlanLevel = subscription?.status === 'ACTIVE' || subscription?.status === 'TRIALING'
    ? getPlanLevelByPriceId(subscription.stripePriceId)
    : 'FREE';

  const limits = PLANS[planLevel];
  const usage = await getUsageForPeriod(workspaceId, getCurrentBillingPeriodId());

  return { planLevel, limits, usage, subscription };
}

export async function canIngestIncident(workspaceId: string): Promise<boolean> {
  // We NEVER block incident ingestion aggressively.
  // We might tag them or warn the user, but we preserve operational history.
  // For safety, let's hard cap at 2x the limit to prevent absolute abuse, 
  // but allow normal bursts over quota.
  const ctx = await getWorkspacePlanContext(workspaceId);
  return ctx.usage.INCIDENT_COUNT < (ctx.limits.incidentsPerMonth * 2);
}

export async function canExecuteRecovery(workspaceId: string): Promise<boolean> {
  const ctx = await getWorkspacePlanContext(workspaceId);
  // Orchestration is an advanced feature, soft-lock it if not enabled
  if (!ctx.limits.orchestrationEnabled) return false;
  return true;
}

export async function canExportPir(workspaceId: string): Promise<boolean> {
  const ctx = await getWorkspacePlanContext(workspaceId);
  return ctx.limits.pirExportsEnabled;
}
