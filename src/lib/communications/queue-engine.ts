import { prisma } from "@/lib/prisma";

export const QueueEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getQueueEngine = async (...args: any[]) => ({});
export const calculateQueueEngine = async (...args: any[]) => ({});
export const recordQueueEngineEvents = async (...args: any[]) => ({});
