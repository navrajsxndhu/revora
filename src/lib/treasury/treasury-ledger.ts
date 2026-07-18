import { prisma } from "@/lib/prisma";

export const TreasuryLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTreasuryLedger = async (...args: any[]) => ({});
export const calculateTreasuryLedger = async (...args: any[]) => ({});
export const recordTreasuryLedgerEvents = async (...args: any[]) => ({});
