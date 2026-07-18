import { prisma } from "@/lib/prisma";

export const KnowledgeEngine = {
  getArticles: async (workspaceId: string) => {
    return prisma.knowledgeArticle.findMany({ where: { workspaceId } });
  },
  getDomains: async (workspaceId: string) => {
    return prisma.knowledgeDomain.findMany({ where: { workspaceId } });
  },
  getCategories: async (workspaceId: string) => {
    return prisma.knowledgeCategory.findMany({ where: { workspaceId } });
  }
};
