import { prisma } from "@/lib/prisma";

export type ServiceRawMetrics = {
  serviceName: string;
  incidentCount: number;
  mttrMinutes: number;
  avgBlastRadius: number;
  recoverySuccessRate: number;
  rollbackCount: number;
};

export async function calculateServiceMetrics(serviceName: string): Promise<ServiceRawMetrics> {
  const incidents = await prisma.incident.findMany({
    where: { serviceAffected: serviceName, isSymptom: false },
    include: { childIncidents: true, deployment: true }
  });

  const incidentCount = incidents.length;
  if (incidentCount === 0) {
    return { serviceName, incidentCount: 0, mttrMinutes: 0, avgBlastRadius: 0, recoverySuccessRate: 100, rollbackCount: 0 };
  }

  let totalResolutionTime = 0;
  let resolvedCount = 0;
  let totalBlastRadius = 0;
  let successfulRecoveries = 0;
  let rollbackCount = 0;

  for (const inc of incidents) {
    totalBlastRadius += inc.childIncidents.length;
    if (inc.resolvedAt && inc.createdAt) {
      totalResolutionTime += (inc.resolvedAt.getTime() - inc.createdAt.getTime());
      resolvedCount++;
      if (inc.resolvedSuccessfully) {
        successfulRecoveries++;
      }
    }
    if (inc.rollbackTriggered || (inc.deployment && inc.deployment.rollbackCount > 0)) {
      rollbackCount++;
    }
  }

  const mttrMinutes = resolvedCount > 0 ? (totalResolutionTime / resolvedCount) / 60000 : 0;
  const avgBlastRadius = totalBlastRadius / incidentCount;
  const recoverySuccessRate = resolvedCount > 0 ? (successfulRecoveries / resolvedCount) * 100 : 0;

  return {
    serviceName,
    incidentCount,
    mttrMinutes,
    avgBlastRadius,
    recoverySuccessRate,
    rollbackCount
  };
}

export async function getAllServiceMetrics(): Promise<ServiceRawMetrics[]> {
  const distinctServices = await prisma.incident.findMany({
    where: { serviceAffected: { not: null } },
    select: { serviceAffected: true },
    distinct: ['serviceAffected']
  });

  const metrics = await Promise.all(
    distinctServices
      .filter(s => s.serviceAffected)
      .map(s => calculateServiceMetrics(s.serviceAffected as string))
  );

  return metrics;
}
