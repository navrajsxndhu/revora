import { prisma } from "@/lib/prisma";

export const ServiceCatalogEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};

export const getServiceCatalogEngine = async (...args: any[]) => ({});
export const calculateServiceCatalogEngine = async (...args: any[]) => ({});
export const recordServiceCatalogEngineEvents = async (...args: any[]) => ({});
