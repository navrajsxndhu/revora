import { prisma } from "@/lib/prisma";

export const InvestmentLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getInvestmentLedger = async (...args: any[]) => ({});
export const calculateInvestmentLedger = async (...args: any[]) => ({});
export const recordInvestmentLedgerEvents = async (...args: any[]) => ({});
