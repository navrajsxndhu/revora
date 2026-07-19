import { prisma } from "@/lib/prisma";

export const PricingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPricingEngine = async (...args: any[]) => ({});
export const calculatePricingEngine = async (...args: any[]) => ({});
export const recordPricingEngineEvents = async (...args: any[]) => ({});
