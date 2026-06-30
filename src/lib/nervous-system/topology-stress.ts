import { prisma } from "../prisma";

export async function aggregateStressNodes(workspaceId: string) {
  // Combines incidents and active governance into a stress graph
  const incidents = await prisma.incident.findMany({
    where: { workspaceId, state: { not: 'RESOLVED' } },
    select: { serviceAffected: true, severity: true }
  });

  const govs = await prisma.serviceGovernance.findMany({
    where: { workspaceId },
    select: { serviceName: true, reliabilityBudget: true, deploymentFreezeActive: true }
  });

  const nodes = new Map<string, any>();

  for (const g of govs) {
    let stressLevel = 100 - g.reliabilityBudget;
    if (g.deploymentFreezeActive) stressLevel += 50;

    nodes.set(g.serviceName, { id: g.serviceName, stressLevel });
  }

  for (const inc of incidents) {
    if (inc.serviceAffected) {
      const existing = nodes.get(inc.serviceAffected) || { id: inc.serviceAffected, stressLevel: 0 };
      existing.stressLevel += inc.severity === 'CRITICAL' ? 80 : 40;
      nodes.set(inc.serviceAffected, existing);
    }
  }

  return Array.from(nodes.values()).map(n => ({
    id: n.id,
    stressLevel: Math.min(100, n.stressLevel),
    state: n.stressLevel > 80 ? 'CRITICAL' : n.stressLevel > 40 ? 'DEGRADED' : 'HEALTHY'
  }));
}
