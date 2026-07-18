import { prisma } from "@/lib/prisma";

export const BlastRadiusEngine = {
  getAnalyses: async (workspaceId: string) => {
    return prisma.blastRadiusAnalysis.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
  }
};
