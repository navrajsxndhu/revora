import { prisma } from "@/lib/prisma";

export const ScheduleLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getScheduleLedgerEngine = async (...args: any[]) => ({});
export const calculateScheduleLedgerEngine = async (...args: any[]) => ({});
export const recordScheduleLedgerEngineEvents = async (...args: any[]) => ({});
