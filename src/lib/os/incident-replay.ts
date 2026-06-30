import { prisma } from "../prisma";

export async function fetchReplayTimeline(incidentId: string) {
  // Returns all events for this incident in chronological order for step-by-step playback
  return await prisma.incidentEvent.findMany({
    where: { incidentId },
    orderBy: { timestamp: 'asc' },
    select: { id: true, type: true, message: true, timestamp: true, metadata: true }
  });
}
