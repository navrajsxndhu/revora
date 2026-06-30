import { prisma } from "../prisma";

export async function calculateReliabilityDebt(workspaceId: string) {
  // Simulates rolling windows over 30/60/90 days by pulling recent deployments
  const windowDate = new Date();
  windowDate.setDate(windowDate.getDate() - 30);

  const deployments = await prisma.deployment.findMany({
    where: { 
      workspaceId,
      createdAt: { gte: windowDate }
    },
    include: { incidents: true }
  });

  const serviceScores: Record<string, { rollbacks: number, incidentCount: number, mttr: number }> = {};

  for (const d of deployments) {
    if (!serviceScores[d.serviceName]) {
      serviceScores[d.serviceName] = { rollbacks: 0, incidentCount: 0, mttr: 0 };
    }
    
    if (d.rollbackCount > 0) {
      serviceScores[d.serviceName].rollbacks += 1;
    }
    
    serviceScores[d.serviceName].incidentCount += d.incidents.length;
  }

  // Very simplified debt scoring: 
  // High rollbacks + High incident counts = High Debt
  return Object.entries(serviceScores)
    .filter(([_, metrics]) => metrics.incidentCount > 0 || metrics.rollbacks > 0)
    .map(([service, metrics]) => {
      const debtScore = Math.min(100, (metrics.rollbacks * 20) + (metrics.incidentCount * 10));
      return {
        service,
        debtScore,
        trend: debtScore > 60 ? 'ACCELERATING' : debtScore > 30 ? 'STABLE' : 'DECREASING',
        metrics
      };
    })
    .sort((a, b) => b.debtScore - a.debtScore);
}
