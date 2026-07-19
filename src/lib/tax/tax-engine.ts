import { prisma } from "@/lib/prisma";

export const TaxEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTaxEngine = async (...args: any[]) => ({});
export const calculateTaxEngine = async (...args: any[]) => ({});
export const recordTaxEngineEvents = async (...args: any[]) => ({});
