import { prisma } from "@/lib/prisma";

export const SearchLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateSearchLedgerEngine = async (...args: any[]) => ({});
export const governSearchLedgerEngine = async (...args: any[]) => ({});
export const verifySearchLedgerEngine = async (...args: any[]) => ({});
