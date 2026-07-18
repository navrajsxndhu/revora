import { prisma } from "@/lib/prisma";

export const ServiceCatalogEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
