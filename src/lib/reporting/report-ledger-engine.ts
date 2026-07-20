import { prisma } from "@/lib/prisma";

export const ReportLedgerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateReportLedgerEngine = async (...args: any[]) => ({});
export const governReportLedgerEngine = async (...args: any[]) => ({});
export const verifyReportLedgerEngine = async (...args: any[]) => ({});
