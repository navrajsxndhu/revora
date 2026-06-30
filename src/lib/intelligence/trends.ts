import { prisma } from "@/lib/prisma";

export async function calculateGlobalTrends() {
  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  // Incidents this week vs last week
  const incidentsThisWeek = await prisma.incident.count({
    where: { createdAt: { gte: oneWeekAgo } }
  });

  const incidentsLastWeek = await prisma.incident.count({
    where: { createdAt: { gte: twoWeeksAgo, lt: oneWeekAgo } }
  });

  let incidentTrend = 0;
  if (incidentsLastWeek > 0) {
    incidentTrend = Math.round(((incidentsThisWeek - incidentsLastWeek) / incidentsLastWeek) * 100);
  } else if (incidentsThisWeek > 0) {
    incidentTrend = 100; // 100% increase if last week was 0
  }

  // Recoveries this week vs last week
  const recoveriesThisWeek = await prisma.auditLog.findMany({
    where: { eventType: "RECOVERY_COMPLETED", createdAt: { gte: oneWeekAgo } }
  });

  const recoveriesLastWeek = await prisma.auditLog.findMany({
    where: { eventType: "RECOVERY_COMPLETED", createdAt: { gte: twoWeeksAgo, lt: oneWeekAgo } }
  });

  const successRateThisWeek = recoveriesThisWeek.length > 0 
    ? (recoveriesThisWeek.filter(r => r.status === "SUCCESS").length / recoveriesThisWeek.length) * 100 
    : 0;
  
  const successRateLastWeek = recoveriesLastWeek.length > 0
    ? (recoveriesLastWeek.filter(r => r.status === "SUCCESS").length / recoveriesLastWeek.length) * 100
    : 0;

  const recoveryTrend = Math.round(successRateThisWeek - successRateLastWeek); // Absolute percentage points

  return {
    incidentTrend,
    incidentChangeText: incidentTrend > 0 ? `Incidents increased by ${incidentTrend}%` : incidentTrend < 0 ? `Incidents decreased by ${Math.abs(incidentTrend)}%` : "Incident volume stable",
    recoveryTrend,
    recoveryChangeText: recoveryTrend > 0 ? `Recovery success improved by ${recoveryTrend}%` : recoveryTrend < 0 ? `Recovery success dropped by ${Math.abs(recoveryTrend)}%` : "Recovery success stable"
  };
}
