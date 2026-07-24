import { prisma } from '@/lib/prisma';
import { Prisma, WorkspaceActivity } from '@prisma/client';

export class ActivityRepository {
  static async findByWorkspaceId(workspaceId: string, limit: number = 50): Promise<WorkspaceActivity[]> {
    return prisma.workspaceActivity.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  static async create(data: Prisma.WorkspaceActivityCreateInput): Promise<WorkspaceActivity> {
    return prisma.workspaceActivity.create({ data });
  }

  static async updateStatus(id: string, status: string): Promise<WorkspaceActivity> {
    return prisma.workspaceActivity.update({
      where: { id },
      data: { status }
    });
  }
}
