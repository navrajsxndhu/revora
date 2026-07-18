import { prisma } from "@/lib/prisma";

export const InvestmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getInvestmentEngine = async (...args: any[]) => ({});
export const calculateInvestmentEngine = async (...args: any[]) => ({});
export const recordInvestmentEngineEvents = async (...args: any[]) => ({});
