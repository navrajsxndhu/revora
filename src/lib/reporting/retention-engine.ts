import { prisma } from "@/lib/prisma";

export const RetentionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateRetentionEngine = async (...args: any[]) => ({});
export const governRetentionEngine = async (...args: any[]) => ({});
export const verifyRetentionEngine = async (...args: any[]) => ({});
