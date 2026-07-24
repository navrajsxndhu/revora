import { prisma } from '@/lib/prisma';
import { Prisma, WorkspaceHealthSnapshot } from '@prisma/client';

export class HealthRepository {
  static async getLatestHealthSnapshot(workspaceId: string): Promise<WorkspaceHealthSnapshot | null> {
    return prisma.workspaceHealthSnapshot.findFirst({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async getHealthHistory(workspaceId: string, limit: number = 30): Promise<WorkspaceHealthSnapshot[]> {
    return prisma.workspaceHealthSnapshot.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  static async createSnapshot(data: Prisma.WorkspaceHealthSnapshotUncheckedCreateInput): Promise<WorkspaceHealthSnapshot> {
    return prisma.workspaceHealthSnapshot.create({ data });
  }
}
