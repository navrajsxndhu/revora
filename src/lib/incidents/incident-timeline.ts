import { prisma } from "@/lib/prisma";

export async function buildIncidentTimeline(incidentId: string) {
  // Deterministically queries related executions, releases, integration events 
  // and sequences them by timestamp to reconstruct the timeline.
  return await prisma.incidentTimelineEvent.findMany({
    where: { incidentId },
    orderBy: { timestamp: 'asc' }
  });
}
