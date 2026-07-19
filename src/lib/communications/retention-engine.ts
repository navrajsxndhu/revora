import { prisma } from "@/lib/prisma";

export const RetentionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRetentionEngine = async (...args: any[]) => ({});
export const calculateRetentionEngine = async (...args: any[]) => ({});
export const recordRetentionEngineEvents = async (...args: any[]) => ({});
