import { prisma } from "../prisma";

export async function getRegionalHealth(workspaceId: string) {
  const regions = await prisma.regionalServiceHealth.findMany({
    where: { workspaceId },
    orderBy: { region: 'asc' }
  });

  const aggregate: Record<string, { healthy: number, degraded: number, failing: number }> = {};
  
  for (const r of regions) {
    if (!aggregate[r.region]) aggregate[r.region] = { healthy: 0, degraded: 0, failing: 0 };
    if (r.healthState === 'HEALTHY') aggregate[r.region].healthy++;
    else if (r.healthState === 'DEGRADED') aggregate[r.region].degraded++;
    else aggregate[r.region].failing++;
  }

  return Object.entries(aggregate).map(([region, stats]) => ({
    region,
    ...stats,
    overallState: stats.failing > 0 ? 'FAILING' : stats.degraded > 0 ? 'DEGRADED' : 'HEALTHY'
  }));
}
