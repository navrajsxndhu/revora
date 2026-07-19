import { prisma } from "@/lib/prisma";

export const DocumentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDocumentEngine = async (...args: any[]) => ({});
export const calculateDocumentEngine = async (...args: any[]) => ({});
export const recordDocumentEngineEvents = async (...args: any[]) => ({});
