import { prisma } from "@/lib/prisma";

export const TreasuryComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTreasuryComplianceEngine = async (...args: any[]) => ({});
export const calculateTreasuryComplianceEngine = async (...args: any[]) => ({});
export const recordTreasuryComplianceEngineEvents = async (...args: any[]) => ({});
