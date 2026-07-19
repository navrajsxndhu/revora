import { prisma } from "@/lib/prisma";

export const ProvisioningEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getProvisioningEngine = async (...args: any[]) => ({});
export const calculateProvisioningEngine = async (...args: any[]) => ({});
export const recordProvisioningEngineEvents = async (...args: any[]) => ({});
