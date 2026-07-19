import { prisma } from "@/lib/prisma";

export const ApprovalEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getApprovalEngine = async (...args: any[]) => ({});
export const calculateApprovalEngine = async (...args: any[]) => ({});
export const recordApprovalEngineEvents = async (...args: any[]) => ({});
