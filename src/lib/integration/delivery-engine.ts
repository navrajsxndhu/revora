import { prisma } from "@/lib/prisma";

export const DeliveryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const validateDeliveryEngine = async (...args: any[]) => ({});
export const governDeliveryEngine = async (...args: any[]) => ({});
export const verifyDeliveryEngine = async (...args: any[]) => ({});
