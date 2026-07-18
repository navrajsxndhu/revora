import { prisma } from "@/lib/prisma";

export const InventoryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
