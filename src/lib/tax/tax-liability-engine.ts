import { prisma } from "@/lib/prisma";

export const TaxLiabilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTaxLiabilityEngine = async (...args: any[]) => ({});
export const calculateTaxLiabilityEngine = async (...args: any[]) => ({});
export const recordTaxLiabilityEngineEvents = async (...args: any[]) => ({});
