import { prisma } from "@/lib/prisma";

export const ApprovalEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateApprovalEngine = async (...args: any[]) => ({});
export const governApprovalEngine = async (...args: any[]) => ({});
export const verifyApprovalEngine = async (...args: any[]) => ({});
