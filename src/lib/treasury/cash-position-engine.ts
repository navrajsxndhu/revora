import { prisma } from "@/lib/prisma";

export const CashPositionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCashPositionEngine = async (...args: any[]) => ({});
export const calculateCashPositionEngine = async (...args: any[]) => ({});
export const recordCashPositionEngineEvents = async (...args: any[]) => ({});
