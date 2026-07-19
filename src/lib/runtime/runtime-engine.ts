import { prisma } from "@/lib/prisma";

export const RuntimeEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getRuntimeEngine = async (...args: any[]) => ({});
export const calculateRuntimeEngine = async (...args: any[]) => ({});
export const recordRuntimeEngineEvents = async (...args: any[]) => ({});
