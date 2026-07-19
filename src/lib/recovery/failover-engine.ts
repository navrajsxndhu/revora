import { prisma } from "@/lib/prisma";

export const FailoverEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFailoverEngine = async (...args: any[]) => ({});
export const calculateFailoverEngine = async (...args: any[]) => ({});
export const recordFailoverEngineEvents = async (...args: any[]) => ({});
