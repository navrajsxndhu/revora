import { prisma } from "@/lib/prisma";

export const TracingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTracingEngine = async (...args: any[]) => ({});
export const calculateTracingEngine = async (...args: any[]) => ({});
export const recordTracingEngineEvents = async (...args: any[]) => ({});
