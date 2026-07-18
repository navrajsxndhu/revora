import { prisma } from "@/lib/prisma";

export const MetadataCatalogEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
