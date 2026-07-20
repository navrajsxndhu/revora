import { prisma } from "@/lib/prisma";

export const SearchEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateSearchEngine = async (...args: any[]) => ({});
export const governSearchEngine = async (...args: any[]) => ({});
export const verifySearchEngine = async (...args: any[]) => ({});
