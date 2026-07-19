import { prisma } from "@/lib/prisma";

export const FulfillmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getFulfillmentEngine = async (...args: any[]) => ({});
export const calculateFulfillmentEngine = async (...args: any[]) => ({});
export const recordFulfillmentEngineEvents = async (...args: any[]) => ({});
