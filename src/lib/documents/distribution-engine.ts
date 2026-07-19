import { prisma } from "@/lib/prisma";

export const DistributionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDistributionEngine = async (...args: any[]) => ({});
export const calculateDistributionEngine = async (...args: any[]) => ({});
export const recordDistributionEngineEvents = async (...args: any[]) => ({});
