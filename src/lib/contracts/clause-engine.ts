import { prisma } from "@/lib/prisma";

export const ClauseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getClauseEngine = async (...args: any[]) => ({});
export const calculateClauseEngine = async (...args: any[]) => ({});
export const recordClauseEngineEvents = async (...args: any[]) => ({});
