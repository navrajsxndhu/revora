import { prisma } from "@/lib/prisma";

export const ScorecardEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getScorecardEngine = async (...args: any[]) => ({});
export const calculateScorecardEngine = async (...args: any[]) => ({});
export const recordScorecardEngineEvents = async (...args: any[]) => ({});
