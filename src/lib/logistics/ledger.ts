import { prisma } from "@/lib/prisma";

export const Ledger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLedger = async (...args: any[]) => ({});
export const calculateLedger = async (...args: any[]) => ({});
export const recordLedgerEvents = async (...args: any[]) => ({});
