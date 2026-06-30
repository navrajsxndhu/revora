import { prisma } from "../prisma";

export function getCurrentBillingPeriodId(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

export async function incrementUsage(workspaceId: string, metric: 'INCIDENT_COUNT' | 'RECOVERY_EXECUTIONS' | 'API_REQUESTS', amount = 1) {
  const billingPeriodId = getCurrentBillingPeriodId();

  await prisma.workspaceUsage.upsert({
    where: {
      workspaceId_billingPeriodId_metric: {
        workspaceId,
        billingPeriodId,
        metric
      }
    },
    update: {
      value: { increment: amount }
    },
    create: {
      workspaceId,
      billingPeriodId,
      metric,
      value: amount
    }
  });
}

export async function getUsageForPeriod(workspaceId: string, billingPeriodId: string) {
  const records = await prisma.workspaceUsage.findMany({
    where: { workspaceId, billingPeriodId }
  });

  const usage = {
    INCIDENT_COUNT: 0,
    RECOVERY_EXECUTIONS: 0,
    API_REQUESTS: 0
  };

  for (const record of records) {
    if (record.metric in usage) {
      usage[record.metric as keyof typeof usage] = record.value;
    }
  }

  return usage;
}
