import { prisma } from "../prisma";
import { invokeCopilot } from "./copilot";

export async function generateBlastRadiusSummary(incidentId: string) {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    include: { symptomIncidents: true, rootCauseIncident: true }
  });

  if (!incident) throw new Error("Incident not found");

  const context = JSON.stringify({
    service: incident.serviceAffected,
    rootCauseOf: incident.symptomIncidents.map(s => s.serviceAffected),
    symptomOf: incident.rootCauseIncident?.serviceAffected || null
  }, null, 2);

  return await invokeCopilot(
    context, 
    "Blast Radius Explainer", 
    "Explain the cascading failure dependencies based strictly on the provided JSON."
  );
}
