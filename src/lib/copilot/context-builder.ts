import { prisma } from "../prisma";

export async function buildIncidentContext(incidentId: string) {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    include: {
      events: { orderBy: { createdAt: 'asc' } },
      deadLetters: true
    }
  });

  if (!incident) throw new Error("Incident not found");

  const recentDeployments = await prisma.deployment.findMany({
    where: { 
      workspaceId: incident.workspaceId,
      createdAt: {
        gte: new Date(incident.createdAt.getTime() - 60 * 60 * 1000 * 24), // 24 hours before
        lte: incident.createdAt
      }
    },
    orderBy: { createdAt: 'desc' },
    take: 5
  });

  // Construct structured JSON representation for context
  return JSON.stringify({
    incident: {
      title: incident.title,
      severity: incident.severity,
      status: incident.status,
      serviceAffected: incident.serviceAffected,
      createdAt: incident.createdAt,
      resolvedAt: incident.resolvedAt
    },
    timeline: incident.events.map(e => ({
      type: e.eventType,
      time: e.createdAt,
      actor: e.actor,
      payload: e.payload
    })),
    deadLetterFailures: incident.deadLetters.length,
    deploymentsPrecedingIncident: recentDeployments.map(d => ({
      service: d.serviceName,
      version: d.version,
      riskLevel: d.riskLevel
    }))
  }, null, 2);
}
