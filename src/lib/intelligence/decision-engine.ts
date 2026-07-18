import { prisma } from "@/lib/prisma";

export const DecisionEngine = {
  getDecisions: async (workspaceId: string) => {
    return prisma.decisionPackage.findMany({
      where: { workspaceId }
    });
  }
};
