import { prisma } from "@/lib/prisma";

export const HedgingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getHedgingEngine = async (...args: any[]) => ({});
export const calculateHedgingEngine = async (...args: any[]) => ({});
export const recordHedgingEngineEvents = async (...args: any[]) => ({});
