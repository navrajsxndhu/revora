import { prisma } from "@/lib/prisma";

export const EntitlementEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getEntitlementEngine = async (...args: any[]) => ({});
export const calculateEntitlementEngine = async (...args: any[]) => ({});
export const recordEntitlementEngineEvents = async (...args: any[]) => ({});
