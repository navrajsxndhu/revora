import { prisma } from "@/lib/prisma";

export const KnowledgeEvidence = {
  getEvidence: async (workspaceId: string) => {
    return prisma.knowledgeEvidence.findMany({ where: { workspaceId } });
  }
};
