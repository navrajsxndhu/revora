import { prisma } from "@/lib/prisma";

export const InventoryAuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
