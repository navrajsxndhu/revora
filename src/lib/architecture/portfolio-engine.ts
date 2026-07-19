import { prisma } from "@/lib/prisma";

export const PortfolioEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPortfolioEngine = async (...args: any[]) => ({});
export const calculatePortfolioEngine = async (...args: any[]) => ({});
export const recordPortfolioEngineEvents = async (...args: any[]) => ({});
