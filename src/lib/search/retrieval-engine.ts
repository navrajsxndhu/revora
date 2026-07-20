import { prisma } from "@/lib/prisma";

export const RetrievalEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateRetrievalEngine = async (...args: any[]) => ({});
export const governRetrievalEngine = async (...args: any[]) => ({});
export const verifyRetrievalEngine = async (...args: any[]) => ({});
