import { prisma } from "@/lib/prisma";

export const DecisionMemoryEngine = {
  getDecisions: async (workspaceId: string) => {
    return prisma.decisionMemory.findMany({ where: { workspaceId } });
  }
};
