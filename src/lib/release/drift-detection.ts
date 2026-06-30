import { prisma } from "@/lib/prisma";

export async function detectArchitecturalDrift(serviceName: string): Promise<{ driftWarnings: string[], maxBlastRadius: number, recentFailures: number }> {
  const driftWarnings: string[] = [];

  // Look at the last 10 root cause incidents for this service
  const incidents = await prisma.incident.findMany({
    where: { serviceAffected: serviceName, isSymptom: false },
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: {
      childIncidents: true
    }
  });

  const recentFailures = incidents.length;
  let maxBlastRadius = 0;
  let escalatingBlastRadius = false;

  if (incidents.length >= 3) {
    const olderAvgBlast = incidents.slice(3).reduce((acc, i) => acc + i.childIncidents.length, 0) / Math.max(1, incidents.length - 3);
    const newerAvgBlast = incidents.slice(0, 3).reduce((acc, i) => acc + i.childIncidents.length, 0) / 3;

    if (newerAvgBlast > olderAvgBlast && newerAvgBlast >= 2) {
      escalatingBlastRadius = true;
      driftWarnings.push(`Architectural drift detected: Cascading blast radius for ${serviceName} is increasing. Recent outages take down an average of ${newerAvgBlast.toFixed(1)} downstream systems.`);
    }
  }

  for (const inc of incidents) {
    if (inc.childIncidents.length > maxBlastRadius) {
      maxBlastRadius = inc.childIncidents.length;
    }
  }

  if (recentFailures >= 5) {
    driftWarnings.push(`High instability: ${serviceName} has experienced ${recentFailures} root cause failures recently.`);
  }

  return {
    driftWarnings,
    maxBlastRadius,
    recentFailures
  };
}
