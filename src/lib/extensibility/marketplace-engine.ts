import { prisma } from "@/lib/prisma";

export const MarketplaceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getMarketplaceEngine = async (...args: any[]) => ({});
export const calculateMarketplaceEngine = async (...args: any[]) => ({});
export const recordMarketplaceEngineEvents = async (...args: any[]) => ({});
