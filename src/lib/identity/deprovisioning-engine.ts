import { prisma } from "@/lib/prisma";

export const DeprovisioningEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getDeprovisioningEngine = async (...args: any[]) => ({});
export const calculateDeprovisioningEngine = async (...args: any[]) => ({});
export const recordDeprovisioningEngineEvents = async (...args: any[]) => ({});
