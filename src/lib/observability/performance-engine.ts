import { prisma } from "@/lib/prisma";

export const PerformanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPerformanceEngine = async (...args: any[]) => ({});
export const calculatePerformanceEngine = async (...args: any[]) => ({});
export const recordPerformanceEngineEvents = async (...args: any[]) => ({});
