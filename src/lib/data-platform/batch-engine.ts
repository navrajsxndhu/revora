import { prisma } from "@/lib/prisma";

export const BatchEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getBatchEngine = async (...args: any[]) => ({});
export const calculateBatchEngine = async (...args: any[]) => ({});
export const recordBatchEngineEvents = async (...args: any[]) => ({});
