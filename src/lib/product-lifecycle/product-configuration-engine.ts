import { prisma } from "@/lib/prisma";

export const ProductConfigurationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
