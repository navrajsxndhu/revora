import { prisma } from "@/lib/prisma";

export const MetricsEngine = {
  getMetrics: async (workspaceId: string) => {
    return prisma.telemetryMetric.findMany({ where: { workspaceId } });
  }
};
