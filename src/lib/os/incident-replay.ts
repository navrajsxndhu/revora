import { prisma } from "../prisma";

export async function fetchReplayTimeline(incidentId: string) {
  // Returns all events for this incident in chronological order for step-by-step playback
  return await prisma.incidentEvent.findMany({
    where: { incidentId },
    orderBy: { createdAt: 'asc' },
    select: { id: true, eventType: true, payload: true, actor: true, createdAt: true }
  });
}
