import { prisma } from "@/lib/prisma";

export const ArchitectureDecisionEngine = {
  getDecisions: async (workspaceId: string) => {
    return prisma.architectureDecision.findMany({ where: { workspaceId } });
  }
};
