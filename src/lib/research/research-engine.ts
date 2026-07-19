import { prisma } from "@/lib/prisma";

export const ResearchEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getResearchEngine = async (...args: any[]) => ({});
export const calculateResearchEngine = async (...args: any[]) => ({});
export const recordResearchEngineEvents = async (...args: any[]) => ({});
