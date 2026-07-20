import { prisma } from "@/lib/prisma";

export const SubscriptionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateSubscriptionEngine = async (...args: any[]) => ({});
export const governSubscriptionEngine = async (...args: any[]) => ({});
export const verifySubscriptionEngine = async (...args: any[]) => ({});
