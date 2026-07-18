import { prisma } from "@/lib/prisma";

export const ModelInventoryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
