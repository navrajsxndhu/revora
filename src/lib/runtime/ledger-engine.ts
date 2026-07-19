import { prisma } from "@/lib/prisma";

export const LedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLedgerEngine = async (...args: any[]) => ({});
export const calculateLedgerEngine = async (...args: any[]) => ({});
export const recordLedgerEngineEvents = async (...args: any[]) => ({});
