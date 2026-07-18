import { prisma } from "@/lib/prisma";

export const PortfolioRoadmapEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPortfolioRoadmapEngine = async (...args: any[]) => ({});
export const calculatePortfolioRoadmapEngine = async (...args: any[]) => ({});
export const recordPortfolioRoadmapEngineEvents = async (...args: any[]) => ({});
