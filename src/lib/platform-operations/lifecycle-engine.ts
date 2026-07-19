import { prisma } from "@/lib/prisma";

export const LifecycleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getLifecycleEngine = async (...args: any[]) => ({});
export const calculateLifecycleEngine = async (...args: any[]) => ({});
export const recordLifecycleEngineEvents = async (...args: any[]) => ({});
