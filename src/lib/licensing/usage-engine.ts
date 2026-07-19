import { prisma } from "@/lib/prisma";

export const UsageEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getUsageEngine = async (...args: any[]) => ({});
export const calculateUsageEngine = async (...args: any[]) => ({});
export const recordUsageEngineEvents = async (...args: any[]) => ({});
