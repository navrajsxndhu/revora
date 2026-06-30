import { prisma } from "@/lib/prisma";

export async function detectRecurringIssues(correlationId: string | null) {
  if (!correlationId) return 0;
  
  const count = await prisma.incident.count({
    where: {
      correlationId,
      createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } // Last 7 days
    }
  });
  
  return count;
}

export function calculateSeverity(recurringCount: number, serviceAffected?: string | null) {
  if (recurringCount >= 3) return "CRITICAL";
  if (serviceAffected?.toLowerCase().includes("production")) return "HIGH";
  if (recurringCount > 0) return "MEDIUM";
  return "LOW";
}

export function generateRecommendation(recurringCount: number) {
  if (recurringCount >= 3) {
    return "Rollback strongly recommended. 3+ consecutive failures detected for this deployment hash.";
  }
  if (recurringCount === 1) {
    return "Auto-replay initiated. This issue appears transient and is being retried in the background.";
  }
  return "Manual investigation required. Review the deployment diff to isolate the breaking change.";
}

export async function getOperationalInsights() {
  // Aggregate incidents by serviceAffected to find the most unstable service
  const serviceGroups = await prisma.incident.groupBy({
    by: ['serviceAffected'],
    _count: { serviceAffected: true },
    orderBy: { _count: { serviceAffected: 'desc' } },
    take: 1
  });

  const mostUnstableService = serviceGroups[0]?.serviceAffected || "N/A";
  
  const criticalCount = await prisma.incident.count({
    where: { severity: "CRITICAL" }
  });

  const autoReplayedCount = await prisma.workflowExecution.count({
    where: { autoReplayed: true }
  });

  return {
    mostUnstableService,
    criticalCount,
    autoReplayedCount
  };
}
