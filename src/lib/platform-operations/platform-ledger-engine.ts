import { prisma } from "@/lib/prisma";

export const PlatformLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPlatformLedgerEngine = async (...args: any[]) => ({});
export const calculatePlatformLedgerEngine = async (...args: any[]) => ({});
export const recordPlatformLedgerEngineEvents = async (...args: any[]) => ({});
