import { prisma } from "@/lib/prisma";

export async function findCorrelatedMasterIncident(
  deploymentId: string | undefined, 
  correlationId: string | undefined, 
  serviceAffected: string
) {
  // Only look at OPEN incidents that are not child incidents themselves
  const recentMasters = await prisma.incident.findMany({
    where: { 
      state: "OPEN",
      masterIncidentId: null
    },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  for (const master of recentMasters) {
    // 1. Direct correlation match
    if (correlationId && master.correlationId === correlationId) {
      return master;
    }
    // 2. Deployment match for the same service
    if (deploymentId && master.deploymentId === deploymentId && master.serviceAffected === serviceAffected) {
      return master;
    }
    // 3. Very recent matching service (within 1 hour)
    if (master.serviceAffected === serviceAffected) {
      const hoursDiff = (new Date().getTime() - master.createdAt.getTime()) / (1000 * 60 * 60);
      if (hoursDiff < 1) {
        return master;
      }
    }
  }

  return null;
}
