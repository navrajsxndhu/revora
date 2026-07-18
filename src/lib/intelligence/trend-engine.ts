import { prisma } from "@/lib/prisma";

export const TrendEngine = {
  getTrends: async (workspaceId: string) => {
    return prisma.operationalTrend.findMany({
      where: { workspaceId }
    });
  }
};
