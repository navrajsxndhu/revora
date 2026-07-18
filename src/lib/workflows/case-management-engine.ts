import { prisma } from "@/lib/prisma";

export const CaseManagementEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCaseManagementEngine = async (...args: any[]) => ({});
export const calculateCaseManagementEngine = async (...args: any[]) => ({});
export const recordCaseManagementEngineEvents = async (...args: any[]) => ({});
