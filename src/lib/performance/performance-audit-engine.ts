import { prisma } from "@/lib/prisma";

export const PerformanceAuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getPerformanceAuditEngine = async (...args: any[]) => ({});
export const calculatePerformanceAuditEngine = async (...args: any[]) => ({});
export const recordPerformanceAuditEngineEvents = async (...args: any[]) => ({});
