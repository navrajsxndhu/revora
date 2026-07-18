import { prisma } from "@/lib/prisma";

export const PerformanceMeasureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPerformanceMeasureEngine = async (...args: any[]) => ({});
export const calculatePerformanceMeasureEngine = async (...args: any[]) => ({});
export const recordPerformanceMeasureEngineEvents = async (...args: any[]) => ({});
