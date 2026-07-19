import { prisma } from "@/lib/prisma";

export const RecallEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRecallEngine = async (...args: any[]) => ({});
export const calculateRecallEngine = async (...args: any[]) => ({});
export const recordRecallEngineEvents = async (...args: any[]) => ({});
