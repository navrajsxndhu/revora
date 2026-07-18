import { prisma } from "@/lib/prisma";

export const TreasuryIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTreasuryIndex = async (...args: any[]) => ({});
export const calculateTreasuryIndex = async (...args: any[]) => ({});
export const recordTreasuryIndexEvents = async (...args: any[]) => ({});
