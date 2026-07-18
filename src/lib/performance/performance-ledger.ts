import { prisma } from "@/lib/prisma";

export const PerformanceLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPerformanceLedger = async (...args: any[]) => ({});
export const calculatePerformanceLedger = async (...args: any[]) => ({});
export const recordPerformanceLedgerEvents = async (...args: any[]) => ({});
