import { prisma } from "@/lib/prisma";

export const BusinessObjectiveEngine = {
  getObjectives: async (workspaceId: string) => {
    return prisma.businessObjective.findMany({
      where: { workspaceId }
    });
  }
};
