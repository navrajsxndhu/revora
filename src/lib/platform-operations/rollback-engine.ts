import { prisma } from "@/lib/prisma";

export const RollbackEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRollbackEngine = async (...args: any[]) => ({});
export const calculateRollbackEngine = async (...args: any[]) => ({});
export const recordRollbackEngineEvents = async (...args: any[]) => ({});
