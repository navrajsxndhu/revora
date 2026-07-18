import { prisma } from "@/lib/prisma";

export const WarehouseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
