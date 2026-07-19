import { prisma } from "@/lib/prisma";

export const ReportingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getReportingEngine = async (...args: any[]) => ({});
export const calculateReportingEngine = async (...args: any[]) => ({});
export const recordReportingEngineEvents = async (...args: any[]) => ({});
