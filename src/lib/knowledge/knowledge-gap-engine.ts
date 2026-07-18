import { prisma } from "@/lib/prisma";

export const KnowledgeGapEngine = {
  getGaps: async (workspaceId: string) => {
    return prisma.knowledgeGap.findMany({ where: { workspaceId } });
  }
};
