import { prisma } from "@/lib/prisma";

export const CatalogEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getCatalogEngine = async (...args: any[]) => ({});
export const calculateCatalogEngine = async (...args: any[]) => ({});
export const recordCatalogEngineEvents = async (...args: any[]) => ({});
