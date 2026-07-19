import { prisma } from "@/lib/prisma";

export const RolloutEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRolloutEngine = async (...args: any[]) => ({});
export const calculateRolloutEngine = async (...args: any[]) => ({});
export const recordRolloutEngineEvents = async (...args: any[]) => ({});
