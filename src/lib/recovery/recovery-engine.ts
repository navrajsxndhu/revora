import { prisma } from "@/lib/prisma";

export const RecoveryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRecoveryEngine = async (...args: any[]) => ({});
export const calculateRecoveryEngine = async (...args: any[]) => ({});
export const recordRecoveryEngineEvents = async (...args: any[]) => ({});
