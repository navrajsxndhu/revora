import { prisma } from "@/lib/prisma";

export const KnowledgeIndex = {
  getIndex: async (workspaceId: string) => {
    return prisma.knowledgeIndex.findMany({ where: { workspaceId }, orderBy: { createdAt: 'desc' }, take: 1 });
  }
};

export function calculateKnowledgeIndex(ext: unknown, doc: unknown, wis: unknown, mem: unknown) {
  return 100;
}

