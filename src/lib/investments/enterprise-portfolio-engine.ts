import { prisma } from "@/lib/prisma";

export const EnterprisePortfolioEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getEnterprisePortfolioEngine = async (...args: any[]) => ({});
export const calculateEnterprisePortfolioEngine = async (...args: any[]) => ({});
export const recordEnterprisePortfolioEngineEvents = async (...args: any[]) => ({});
