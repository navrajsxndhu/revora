import { prisma } from "@/lib/prisma";

export const RecoveryLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRecoveryLedgerEngine = async (...args: any[]) => ({});
export const calculateRecoveryLedgerEngine = async (...args: any[]) => ({});
export const recordRecoveryLedgerEngineEvents = async (...args: any[]) => ({});
