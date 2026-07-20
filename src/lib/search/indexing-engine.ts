import { prisma } from "@/lib/prisma";

export const IndexingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateIndexingEngine = async (...args: any[]) => ({});
export const governIndexingEngine = async (...args: any[]) => ({});
export const verifyIndexingEngine = async (...args: any[]) => ({});
