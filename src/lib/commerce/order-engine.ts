import { prisma } from "@/lib/prisma";

export const OrderEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getOrderEngine = async (...args: any[]) => ({});
export const calculateOrderEngine = async (...args: any[]) => ({});
export const recordOrderEngineEvents = async (...args: any[]) => ({});
