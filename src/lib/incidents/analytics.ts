import { prisma } from "@/lib/prisma";

export async function getOperationalAnalytics() {
  const [
    totalIncidents,
    resolvedIncidents,
    totalExecutions,
    serviceGroups,
    replays,
    recoveryLogs
  ] = await Promise.all([
    prisma.incident.count(),
    prisma.incident.findMany({ where: { state: 'RESOLVED' } }),
    prisma.workflowExecution.count(),
    prisma.incident.groupBy({
      by: ['serviceAffected'],
      _count: { serviceAffected: true },
      orderBy: { _count: { serviceAffected: 'desc' } }
    }),
    prisma.auditLog.findMany({ where: { eventType: "REMEDIATION_REPLAY_WORKFLOW" } }),
    prisma.auditLog.findMany({ where: { eventType: "RECOVERY_COMPLETED" } })
  ]);

  // MTTR (Mean Time To Resolution) calculation in minutes
  let mttrMinutes = 0;
  if (resolvedIncidents.length > 0) {
    const totalDiff = resolvedIncidents.reduce((acc, inc) => {
      const diffMs = inc.updatedAt.getTime() - inc.createdAt.getTime();
      return acc + diffMs;
    }, 0);
    mttrMinutes = Math.round((totalDiff / resolvedIncidents.length) / 60000);
  }

  // Stability (ratio of failed incidents vs total background workflows)
  // Simple heuristic: If we had 100 executions and 5 incidents, stability is 95%
  let deploymentStability = 100;
  if (totalExecutions > 0) {
    deploymentStability = Math.max(0, Math.round(100 - ((totalIncidents / totalExecutions) * 100)));
  }

  const successfulReplays = replays.filter(r => r.status === "SUCCESS").length;
  const replaySuccessRate = replays.length > 0 ? Math.round((successfulReplays / replays.length) * 100) : 0;

  const runbookResolutions = resolvedIncidents.filter(i => i.activeRunbookId).length;

  const successfulRecoveries = recoveryLogs.filter(l => l.status === "SUCCESS").length;
  const recoverySuccessRate = recoveryLogs.length > 0 ? Math.round((successfulRecoveries / recoveryLogs.length) * 100) : 0;

  return {
    mttrMinutes,
    deploymentStability,
    unresolvedCount: totalIncidents - resolvedIncidents.length,
    mostUnstableService: serviceGroups[0]?.serviceAffected || "N/A",
    unstableServiceIncidentCount: serviceGroups[0]?._count.serviceAffected || 0,
    replaySuccessRate,
    runbookResolutions,
    recoverySuccessRate
  };
}
