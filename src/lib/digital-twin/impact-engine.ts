import { prisma } from "@/lib/prisma";

export const ImpactEngine = {
  getImpacts: async (workspaceId: string) => {
    return prisma.impactAssessment.findMany({
      where: { workspaceId }
    });
  }
};
