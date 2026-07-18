import { prisma } from "@/lib/prisma";

export const BusinessImpactEngine = {
  getAnalysis: async (workspaceId: string) => {
    return prisma.businessImpactAnalysis.findMany({
      where: { workspaceId }
    });
  }
};
