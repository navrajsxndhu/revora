import { prisma } from "@/lib/prisma";

export const PerformanceHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPerformanceHealthEngine = async (...args: any[]) => ({});
export const calculatePerformanceHealthEngine = async (...args: any[]) => ({});
export const recordPerformanceHealthEngineEvents = async (...args: any[]) => ({});
