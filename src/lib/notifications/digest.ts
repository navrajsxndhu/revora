import { prisma } from "@/lib/prisma";

export async function generateOperationalDigest() {
  const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const incidents = await prisma.incident.findMany({
    where: { createdAt: { gte: last24Hours } },
    select: {
      id: true,
      serviceAffected: true,
      severity: true,
      state: true,
      recoveryStatus: true,
      isSymptom: true,
      createdAt: true,
      resolvedAt: true
    }
  });

  const totalIncidents = incidents.length;
  const rootCauses = incidents.filter(i => !i.isSymptom).length;

  const serviceCounts: Record<string, number> = {};
  let totalResolutionTime = 0;
  let resolvedCount = 0;
  let failedRecoveries = 0;

  incidents.forEach(inc => {
    if (inc.serviceAffected) {
      serviceCounts[inc.serviceAffected] = (serviceCounts[inc.serviceAffected] || 0) + 1;
    }
    if (inc.resolvedAt && inc.createdAt) {
      totalResolutionTime += (inc.resolvedAt.getTime() - inc.createdAt.getTime());
      resolvedCount++;
    }
    if (inc.recoveryStatus === "FAILED") {
      failedRecoveries++;
    }
  });

  const mttrMinutes = resolvedCount > 0 ? Math.round((totalResolutionTime / resolvedCount) / 60000) : 0;
  
  const topServices = Object.entries(serviceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([service, count]) => ({ service, count }));

  const summaryMessage = `*Daily Operational Digest*\n\n` +
    `*Total Incidents:* ${totalIncidents} (${rootCauses} Root Causes)\n` +
    `*MTTR (Last 24h):* ${mttrMinutes} minutes\n` +
    `*Failed Automated Recoveries:* ${failedRecoveries}\n\n` +
    `*Top Unstable Services:*\n` +
    topServices.map(ts => `- ${ts.service}: ${ts.count} failures`).join('\n');

  console.log("[DIGEST ROUTER] Dispatching daily digest:\n", summaryMessage);

  return {
    totalIncidents,
    rootCauses,
    mttrMinutes,
    failedRecoveries,
    topServices,
    summaryMessage
  };
}
