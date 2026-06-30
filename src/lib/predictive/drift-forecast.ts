import { prisma } from "../prisma";

export async function calculateDriftForecast(workspaceId: string) {
  // Deterministic check for architectural drift:
  // Usually this means comparing the number of unique downstream services affected over time.
  const incidents = await prisma.incident.findMany({
    where: { 
      workspaceId,
      symptomIncidents: { some: {} }
    },
    include: { symptomIncidents: true },
    orderBy: { createdAt: 'desc' },
    take: 20
  });

  const driftWarnings: { service: string, dependencyGrowth: number, warning: string }[] = [];
  const map: Record<string, number[]> = {};

  // Track the number of symptoms per root cause service over the last 20 incidents
  for (const inc of incidents) {
    if (!inc.serviceAffected) continue;
    if (!map[inc.serviceAffected]) map[inc.serviceAffected] = [];
    map[inc.serviceAffected].push(inc.symptomIncidents.length);
  }

  for (const [service, symptomCounts] of Object.entries(map)) {
    if (symptomCounts.length < 3) continue;
    
    // Reverse to chronological
    symptomCounts.reverse();
    
    const startAvg = (symptomCounts[0] + symptomCounts[1]) / 2;
    const endAvg = (symptomCounts[symptomCounts.length - 1] + symptomCounts[symptomCounts.length - 2]) / 2;

    if (endAvg > startAvg && endAvg > 2) {
      const growth = Math.round(((endAvg - startAvg) / Math.max(1, startAvg)) * 100);
      driftWarnings.push({
        service,
        dependencyGrowth: growth,
        warning: `Blast radius (downstream symptoms) accelerated by ${growth}% over recent incidents. Architectural coupling detected.`
      });
    }
  }

  return driftWarnings;
}
