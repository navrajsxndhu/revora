import { prisma } from "@/lib/prisma";

export const ResourceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
