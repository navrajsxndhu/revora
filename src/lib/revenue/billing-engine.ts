import { prisma } from "@/lib/prisma";

export const BillingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getBillingEngine = async (...args: any[]) => ({});
export const calculateBillingEngine = async (...args: any[]) => ({});
export const recordBillingEngineEvents = async (...args: any[]) => ({});
