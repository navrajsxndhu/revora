import { prisma } from "@/lib/prisma";

export const InitiativeEngine = {
  getInitiatives: async (workspaceId: string) => {
    return prisma.portfolioInitiative.findMany({
      where: { workspaceId }
    });
  }
};
