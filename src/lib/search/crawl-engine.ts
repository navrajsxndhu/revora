import { prisma } from "@/lib/prisma";

export const CrawlEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateCrawlEngine = async (...args: any[]) => ({});
export const governCrawlEngine = async (...args: any[]) => ({});
export const verifyCrawlEngine = async (...args: any[]) => ({});
