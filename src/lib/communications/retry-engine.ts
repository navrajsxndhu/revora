import { prisma } from "@/lib/prisma";

export const RetryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRetryEngine = async (...args: any[]) => ({});
export const calculateRetryEngine = async (...args: any[]) => ({});
export const recordRetryEngineEvents = async (...args: any[]) => ({});
