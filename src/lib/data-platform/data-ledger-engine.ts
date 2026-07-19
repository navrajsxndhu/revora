import { prisma } from "@/lib/prisma";

export const DataLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDataLedgerEngine = async (...args: any[]) => ({});
export const calculateDataLedgerEngine = async (...args: any[]) => ({});
export const recordDataLedgerEngineEvents = async (...args: any[]) => ({});
