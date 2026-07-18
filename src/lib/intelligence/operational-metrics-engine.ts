import { prisma } from "@/lib/prisma";

export const OperationalMetricsEngine = {
  getMetrics: async (workspaceId: string) => {
    return prisma.enterpriseMetric.findMany({
      where: { workspaceId }
    });
  }
};
