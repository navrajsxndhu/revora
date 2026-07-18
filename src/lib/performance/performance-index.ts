import { prisma } from "@/lib/prisma";

export const PerformanceIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPerformanceIndex = async (...args: any[]) => ({});
export const calculatePerformanceIndex = async (...args: any[]) => ({});
export const recordPerformanceIndexEvents = async (...args: any[]) => ({});
