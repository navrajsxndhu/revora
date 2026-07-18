import { prisma } from "@/lib/prisma";

export const BusinessCaseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getBusinessCaseEngine = async (...args: any[]) => ({});
export const calculateBusinessCaseEngine = async (...args: any[]) => ({});
export const recordBusinessCaseEngineEvents = async (...args: any[]) => ({});
