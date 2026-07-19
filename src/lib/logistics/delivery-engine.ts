import { prisma } from "@/lib/prisma";

export const DeliveryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDeliveryEngine = async (...args: any[]) => ({});
export const calculateDeliveryEngine = async (...args: any[]) => ({});
export const recordDeliveryEngineEvents = async (...args: any[]) => ({});
