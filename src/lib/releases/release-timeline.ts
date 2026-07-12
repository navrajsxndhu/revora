import { prisma } from "@/lib/prisma";

export interface ReleaseTimelineEvent {
  milestone: string;
  status: string;
  reachedAt: string;
}

export async function constructReleaseTimeline(workspaceId: string, releaseId: string): Promise<ReleaseTimelineEvent[]> {
  const checkpoints = await prisma.releaseCheckpoint.findMany({
    where: { releaseId },
    orderBy: { reachedAt: 'asc' }
  });

  return checkpoints.map(c => ({
    milestone: c.milestone,
    status: c.status,
    reachedAt: c.reachedAt ? c.reachedAt.toISOString() : "PENDING"
  }));
}
