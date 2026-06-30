import { prisma } from "../prisma";

export async function buildLiveTopology(workspaceId: string) {
  // Synthesizes a deterministic graph from deployments and active incidents
  const recentDeployments = await prisma.deployment.findMany({
    where: { workspaceId },
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: { serviceName: true, dependencyChanges: true, status: true }
  });

  const activeIncidents = await prisma.incident.findMany({
    where: { workspaceId, state: { not: 'RESOLVED' } },
    select: { serviceAffected: true, severity: true, symptomIncidents: { select: { serviceAffected: true } } }
  });

  const nodes = new Map<string, any>();
  const edges: { source: string, target: string, type: string }[] = [];

  // Seed nodes from deployments
  for (const d of recentDeployments) {
    if (!nodes.has(d.serviceName)) {
      nodes.set(d.serviceName, { id: d.serviceName, status: 'HEALTHY', hasActiveDeployment: d.status === 'SHIPPED' });
    }
  }

  // Overlay incidents
  for (const inc of activeIncidents) {
    if (inc.serviceAffected) {
      nodes.set(inc.serviceAffected, { 
        id: inc.serviceAffected, 
        status: inc.severity,
        hasActiveDeployment: nodes.get(inc.serviceAffected)?.hasActiveDeployment || false 
      });

      for (const sym of inc.symptomIncidents) {
        if (sym.serviceAffected) {
          nodes.set(sym.serviceAffected, { 
            id: sym.serviceAffected, 
            status: 'DEGRADED_SYMPTOM',
            hasActiveDeployment: nodes.get(sym.serviceAffected)?.hasActiveDeployment || false 
          });
          edges.push({ source: inc.serviceAffected, target: sym.serviceAffected, type: 'BLAST_RADIUS' });
        }
      }
    }
  }

  return { nodes: Array.from(nodes.values()), edges };
}
