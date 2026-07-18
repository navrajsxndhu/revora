import { prisma } from "@/lib/prisma";

export const RunbookEngine = {
  getRunbooks: async (workspaceId: string) => {
    return prisma.runbookKnowledge.findMany({ where: { workspaceId } });
  }
};
