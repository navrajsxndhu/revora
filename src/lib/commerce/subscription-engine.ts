import { prisma } from "@/lib/prisma";

export const SubscriptionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getSubscriptionEngine = async (...args: any[]) => ({});
export const calculateSubscriptionEngine = async (...args: any[]) => ({});
export const recordSubscriptionEngineEvents = async (...args: any[]) => ({});
