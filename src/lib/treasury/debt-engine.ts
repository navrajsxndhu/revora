import { prisma } from "@/lib/prisma";

export const DebtEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDebtEngine = async (...args: any[]) => ({});
export const calculateDebtEngine = async (...args: any[]) => ({});
export const recordDebtEngineEvents = async (...args: any[]) => ({});
