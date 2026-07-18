import { prisma } from "@/lib/prisma";

export const InvestmentIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getInvestmentIndex = async (...args: any[]) => ({});
export const calculateInvestmentIndex = async (...args: any[]) => ({});
export const recordInvestmentIndexEvents = async (...args: any[]) => ({});
