import { prisma } from "@/lib/prisma";

export const LineageEngine = {
  getLineage: async (workspaceId: string) => {
    return prisma.operationalLineage.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
  }
};
