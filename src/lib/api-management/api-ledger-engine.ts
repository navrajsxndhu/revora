import { prisma } from "@/lib/prisma";

export const ApiLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getApiLedgerEngine = async (...args: any[]) => ({});
export const calculateApiLedgerEngine = async (...args: any[]) => ({});
export const recordApiLedgerEngineEvents = async (...args: any[]) => ({});
