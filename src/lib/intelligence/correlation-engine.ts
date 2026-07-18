import { prisma } from "@/lib/prisma";

export const CorrelationEngine = {
  getCorrelations: async (workspaceId: string) => {
    return prisma.operationalCorrelation.findMany({
      where: { workspaceId }
    });
  }
};
