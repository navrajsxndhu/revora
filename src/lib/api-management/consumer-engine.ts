import { prisma } from "@/lib/prisma";

export const ConsumerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getConsumerEngine = async (...args: any[]) => ({});
export const calculateConsumerEngine = async (...args: any[]) => ({});
export const recordConsumerEngineEvents = async (...args: any[]) => ({});
