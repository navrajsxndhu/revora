import { prisma } from "@/lib/prisma";

export const TopologyLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.topologyLedger.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 100
    });
  }
};
