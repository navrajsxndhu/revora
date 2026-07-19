import { prisma } from "@/lib/prisma";

export const TransferPricingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTransferPricingEngine = async (...args: any[]) => ({});
export const calculateTransferPricingEngine = async (...args: any[]) => ({});
export const recordTransferPricingEngineEvents = async (...args: any[]) => ({});
