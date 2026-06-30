import { prisma } from "@/lib/prisma";
import { SERVICE_DEPENDENCIES } from "@/lib/services/dependencies";

export async function evaluateRootCause(serviceAffected: string) {
  // 1. Get possible upstream dependencies for this service
  const upstreams = SERVICE_DEPENDENCIES[serviceAffected] || [];
  if (upstreams.length === 0) {
    return { rootCauseIncidentId: null, isSymptom: false, probableRootService: null };
  }

  // 2. Fetch OPEN incidents created in the last 5 minutes (rolling window)
  const fiveMinsAgo = new Date(Date.now() - 5 * 60 * 1000);
  
  const openIncidents = await prisma.incident.findMany({
    where: {
      state: "OPEN",
      masterIncidentId: null,
      createdAt: { gte: fiveMinsAgo }
    },
    orderBy: { createdAt: 'asc' }
  });

  // 3. Find if any of these open incidents affect an upstream service
  for (const incident of openIncidents) {
    if (incident.serviceAffected && upstreams.includes(incident.serviceAffected)) {
      // This open incident is an upstream root cause!
      return {
        rootCauseIncidentId: incident.id,
        isSymptom: true,
        probableRootService: incident.serviceAffected
      };
    }
  }

  return { rootCauseIncidentId: null, isSymptom: false, probableRootService: null };
}
