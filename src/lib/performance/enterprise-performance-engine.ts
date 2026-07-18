import { prisma } from "@/lib/prisma";

export const EnterprisePerformanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getEnterprisePerformanceEngine = async (...args: any[]) => ({});
export const calculateEnterprisePerformanceEngine = async (...args: any[]) => ({});
export const recordEnterprisePerformanceEngineEvents = async (...args: any[]) => ({});
