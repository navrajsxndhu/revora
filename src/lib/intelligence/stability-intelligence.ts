import { prisma } from "@/lib/prisma";
import { calculateRiskScore } from "./risk-score";
import { generateDeterministicRecommendation } from "./recommendations";
import { calculateGlobalTrends } from "./trends";

export interface ServiceInsight {
  service: string;
  incidentCount: number;
  averageBlastRadius: number;
  recoveryFailureRate: number;
  averageMTTR: number;
  riskScore: number;
  classification: string;
  recommendation: string;
}

export async function getStabilityIntelligence() {
  // Aggregate incidents grouped by service
  const serviceStats = await prisma.incident.groupBy({
    by: ['serviceAffected'],
    where: { serviceAffected: { not: null } },
    _count: { id: true }
  });

  const insights: ServiceInsight[] = [];

  for (const stat of serviceStats) {
    if (!stat.serviceAffected) continue;
    
    const incidents = await prisma.incident.findMany({
      where: { serviceAffected: stat.serviceAffected },
      include: { symptomIncidents: true }
    });

    let totalBlastRadius = 0;
    let totalMTTR = 0;
    let resolvedCount = 0;

    for (const inc of incidents) {
      totalBlastRadius += inc.symptomIncidents.length;
      if ((inc as any).resolvedAt) {
        totalMTTR += ((inc as any).resolvedAt.getTime() - inc.createdAt.getTime()) / 60000;
        resolvedCount++;
      }
    }

    const averageBlastRadius = incidents.length > 0 ? totalBlastRadius / incidents.length : 0;
    const averageMTTR = resolvedCount > 0 ? totalMTTR / resolvedCount : 0;

    // Check recovery audit logs for this service
    // For simplicity, we check logs containing the service name in the message.
    const recoveryLogs = await prisma.auditLog.findMany({
      where: {
        eventType: { in: ["RECOVERY_STEP_COMPLETED", "RECOVERY_STEP_FAILED"] },
        message: { contains: stat.serviceAffected }
      }
    });

    const failedRecoveries = recoveryLogs.filter(l => l.status === "ERROR").length;
    const recoveryFailureRate = recoveryLogs.length > 0 ? failedRecoveries / recoveryLogs.length : 0;

    const metrics = {
      incidentCount: stat._count.id,
      averageBlastRadius,
      recoveryFailureRate,
      averageMTTR
    };

    const risk = calculateRiskScore(metrics);
    const recommendation = generateDeterministicRecommendation(metrics);

    insights.push({
      service: stat.serviceAffected,
      ...metrics,
      riskScore: risk.score,
      classification: risk.classification,
      recommendation
    });
  }

  // Sort by risk score descending
  insights.sort((a, b) => b.riskScore - a.riskScore);

  const globalTrends = await calculateGlobalTrends();

  return {
    insights,
    globalTrends
  };
}
