import { prisma } from "../prisma";
import { buildIncidentTimeline } from "./timeline-builder";
import { analyzeIncidentImpact } from "./impact-analysis";
import { generatePreventativeActions } from "./preventative-actions";
import { generatePirEnrichment } from "../copilot/pir-summary";

export async function generatePIR(workspaceId: string, incidentId: string) {
  // Check if PIR already exists
  let pir = await prisma.postIncidentReview.findUnique({
    where: { incidentId }
  });

  if (pir && pir.status !== 'DRAFT') {
    throw new Error('PIR already approved and is immutable.');
  }

  const incident = await prisma.incident.findUnique({
    where: { id: incidentId }
  });

  if (!incident) {
    throw new Error('Incident not found.');
  }

  // 1. Reconstruct Timeline
  const timelineMarkdown = await buildIncidentTimeline(incidentId);

  // 2. Impact Analysis
  const impact = await analyzeIncidentImpact(incidentId);

  // 3. Preventative Actions
  const preventativeActions = await generatePreventativeActions(incidentId, impact);

  const title = `PIR: ${incident.title}`;
  const summary = `On ${incident.createdAt.toISOString().split('T')[0]}, an incident affected ${incident.serviceAffected || 'the platform'}, resulting in ${impact.totalDowntimeMinutes} minutes of downtime.`;
  const rootCause = incident.rootCauseSummary || 'Root cause investigation pending (Update Required).';
  const resolutionMarkdown = incident.resolutionNotes || 'No specific resolution notes recorded during mitigation.';

  const pirData = {
    workspaceId,
    incidentId,
    title,
    summary,
    rootCause,
    impact: impact.impactSummaryMarkdown,
    timelineMarkdown,
    resolutionMarkdown,
    preventativeActions,
    status: 'DRAFT',
  };

  if (pir) {
    pir = await prisma.postIncidentReview.update({
      where: { id: pir.id },
      data: pirData
    });
  } else {
    pir = await prisma.postIncidentReview.create({
      data: pirData
    });
  }

  // Asynchronously trigger AI enrichment
  generatePirEnrichment(pir.id).catch(e => {
    console.error("Failed to generate AI enrichment for PIR", e);
  });

  return pir;
}
