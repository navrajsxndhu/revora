import { prisma } from "@/lib/prisma";

export const KnowledgeLedger = {
  getLedger: async (workspaceId: string) => {
    return prisma.knowledgeLedger.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' } });
  }
};
