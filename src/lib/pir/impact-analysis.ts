import { prisma } from "../prisma";

export interface ImpactAnalysis {
  totalDowntimeMinutes: number;
  blastRadius: number;
  symptomsCount: number;
  rollbackTriggered: boolean;
  impactSummaryMarkdown: string;
}

export async function analyzeIncidentImpact(incidentId: string): Promise<ImpactAnalysis> {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    include: {
      symptomIncidents: true,
      deployment: true
    }
  });

  if (!incident) {
    throw new Error(`Incident ${incidentId} not found`);
  }

  // 1. Downtime
  let downtime = 0;
  if (incident.resolvedAt) {
    downtime = Math.round((incident.resolvedAt.getTime() - incident.createdAt.getTime()) / 60000);
  }

  // 2. Blast Radius & Symptoms
  const symptomsCount = incident.symptomIncidents.length;
  // A simple proxy for blast radius here is grouped symptoms + 1 for root
  const blastRadius = symptomsCount + 1;

  // 3. Rollback
  const rollbackTriggered = incident.rollbackTriggered || (incident.deployment?.rollbackCount ? incident.deployment.rollbackCount > 0 : false);

  let md = `### Operational Impact\n\n`;
  md += `- **Total Downtime**: ${downtime > 0 ? `${downtime} minutes` : 'Ongoing / Unknown'}\n`;
  md += `- **Blast Radius**: ${blastRadius} services affected\n`;
  md += `- **Downstream Symptoms Suppressed**: ${symptomsCount}\n`;
  md += `- **Rollback Executed**: ${rollbackTriggered ? 'Yes' : 'No'}\n`;
  
  if (incident.deploymentId) {
    md += `- **Triggering Deployment**: ${incident.deployment?.commitSha?.substring(0,7)} (${incident.deployment?.serviceName})\n`;
  }

  return {
    totalDowntimeMinutes: downtime,
    blastRadius,
    symptomsCount,
    rollbackTriggered,
    impactSummaryMarkdown: md
  };
}
