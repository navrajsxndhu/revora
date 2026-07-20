import { prisma } from "@/lib/prisma";

export const ReportEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateReportEngine = async (...args: any[]) => ({});
export const governReportEngine = async (...args: any[]) => ({});
export const verifyReportEngine = async (...args: any[]) => ({});
