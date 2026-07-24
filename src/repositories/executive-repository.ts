import { prisma } from '@/lib/prisma';
import { Prisma, WorkspaceExecutiveMetric } from '@prisma/client';

export class ExecutiveRepository {
  static async getWorkspaceMetrics(workspaceId: string): Promise<WorkspaceExecutiveMetric[]> {
    return prisma.workspaceExecutiveMetric.findMany({
      where: { workspaceId },
      orderBy: { key: 'asc' }
    });
  }

  static async getMetric(workspaceId: string, key: string): Promise<WorkspaceExecutiveMetric | null> {
    return prisma.workspaceExecutiveMetric.findUnique({
      where: { workspaceId_key: { workspaceId, key } }
    });
  }

  static async upsertMetric(data: Prisma.WorkspaceExecutiveMetricUncheckedCreateInput): Promise<WorkspaceExecutiveMetric> {
    return prisma.workspaceExecutiveMetric.upsert({
      where: { workspaceId_key: { workspaceId: data.workspaceId, key: data.key } },
      update: {
        value: data.value,
        trend: data.trend,
        trendValue: data.trendValue
      },
      create: data
    });
  }
}
