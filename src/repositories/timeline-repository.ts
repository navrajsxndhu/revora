import { prisma } from '@/lib/prisma';
import { Prisma, WorkspaceTimelineEvent } from '@prisma/client';

export class TimelineRepository {
  static async findByWorkspaceId(workspaceId: string, limit: number = 50): Promise<WorkspaceTimelineEvent[]> {
    return prisma.workspaceTimelineEvent.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  static async create(data: Prisma.WorkspaceTimelineEventCreateInput): Promise<WorkspaceTimelineEvent> {
    return prisma.workspaceTimelineEvent.create({ data });
  }
}
