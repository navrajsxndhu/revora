import { prisma } from "@/lib/prisma";

export const FailbackEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFailbackEngine = async (...args: any[]) => ({});
export const calculateFailbackEngine = async (...args: any[]) => ({});
export const recordFailbackEngineEvents = async (...args: any[]) => ({});
