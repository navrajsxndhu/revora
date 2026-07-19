import { prisma } from "@/lib/prisma";

export const ArticleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getArticleEngine = async (...args: any[]) => ({});
export const calculateArticleEngine = async (...args: any[]) => ({});
export const recordArticleEngineEvents = async (...args: any[]) => ({});
