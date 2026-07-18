import { prisma } from "@/lib/prisma";

export const FundingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFundingEngine = async (...args: any[]) => ({});
export const calculateFundingEngine = async (...args: any[]) => ({});
export const recordFundingEngineEvents = async (...args: any[]) => ({});
