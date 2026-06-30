import { prisma } from "@/lib/prisma";

export async function calculateBlastRadius(incidentId: string) {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    include: {
      symptomIncidents: {
        select: { id: true, serviceAffected: true }
      }
    }
  });

  if (!incident) return { impactedServices: 0, downstreamIncidents: 0 };

  const uniqueServices = new Set<string>();
  if (incident.serviceAffected) uniqueServices.add(incident.serviceAffected);

  for (const symptom of incident.symptomIncidents) {
    if (symptom.serviceAffected) {
      uniqueServices.add(symptom.serviceAffected);
    }
  }

  return {
    impactedServices: uniqueServices.size,
    downstreamIncidents: incident.symptomIncidents.length
  };
}
