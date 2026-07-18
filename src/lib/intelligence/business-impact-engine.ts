import { prisma } from "@/lib/prisma";

export const BusinessImpactEngine = {
  getImpacts: async (workspaceId: string) => {
    return prisma.businessImpact.findMany({
      where: { workspaceId }
    });
  }
};
