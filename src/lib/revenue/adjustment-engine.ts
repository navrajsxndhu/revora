import { prisma } from "@/lib/prisma";

export const AdjustmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getAdjustmentEngine = async (...args: any[]) => ({});
export const calculateAdjustmentEngine = async (...args: any[]) => ({});
export const recordAdjustmentEngineEvents = async (...args: any[]) => ({});
