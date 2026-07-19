import { prisma } from "@/lib/prisma";

export const TerritoryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getTerritoryEngine = async (...args: any[]) => ({});
export const calculateTerritoryEngine = async (...args: any[]) => ({});
export const validateTerritoryEngine = async (...args: any[]) => ({});
