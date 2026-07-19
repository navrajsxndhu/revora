import { prisma } from "@/lib/prisma";

export const QuotaEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getQuotaEngine = async (...args: any[]) => ({});
export const calculateQuotaEngine = async (...args: any[]) => ({});
export const recordQuotaEngineEvents = async (...args: any[]) => ({});
