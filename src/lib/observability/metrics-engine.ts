import { prisma } from "@/lib/prisma";

export const MetricsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getMetricsEngine = async (...args: any[]) => ({});
export const calculateMetricsEngine = async (...args: any[]) => ({});
export const recordMetricsEngineEvents = async (...args: any[]) => ({});
