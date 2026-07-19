import { prisma } from "@/lib/prisma";

export const ExecutionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getExecutionEngine = async (...args: any[]) => ({});
export const calculateExecutionEngine = async (...args: any[]) => ({});
export const recordExecutionEngineEvents = async (...args: any[]) => ({});
