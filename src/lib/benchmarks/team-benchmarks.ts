import { prisma } from "@/lib/prisma";

export type TeamMetrics = {
  team: string;
  incidentsOwned: number;
  mttrMinutes: number;
  rollbackCount: number;
};

export async function getTeamBenchmarks(): Promise<TeamMetrics[]> {
  const incidents = await prisma.incident.findMany({
    where: { team: { not: null } }
  });

  const deployments = await prisma.deployment.findMany({
    where: { team: { not: null } }
  });

  const teamData: Record<string, { totalResolutionTime: number; resolvedCount: number; incidentsOwned: number; rollbackCount: number }> = {};

  incidents.forEach(inc => {
    const t = inc.team as string;
    if (!teamData[t]) {
      teamData[t] = { totalResolutionTime: 0, resolvedCount: 0, incidentsOwned: 0, rollbackCount: 0 };
    }
    
    teamData[t].incidentsOwned++;
    
    if ((inc as any).resolvedAt && inc.createdAt) {
      teamData[t].totalResolutionTime += ((inc as any).resolvedAt.getTime() - inc.createdAt.getTime());
      teamData[t].resolvedCount++;
    }
    if (inc.rollbackTriggered) {
      teamData[t].rollbackCount++;
    }
  });

  deployments.forEach(dep => {
    const t = dep.team as string;
    if (!teamData[t]) {
      teamData[t] = { totalResolutionTime: 0, resolvedCount: 0, incidentsOwned: 0, rollbackCount: 0 };
    }
    teamData[t].rollbackCount += dep.rollbackCount;
  });

  return Object.keys(teamData).map(team => {
    const data = teamData[team];
    const mttrMinutes = data.resolvedCount > 0 ? (data.totalResolutionTime / data.resolvedCount) / 60000 : 0;
    
    return {
      team,
      incidentsOwned: data.incidentsOwned,
      mttrMinutes,
      rollbackCount: data.rollbackCount
    };
  }).sort((a, b) => b.incidentsOwned - a.incidentsOwned);
}
