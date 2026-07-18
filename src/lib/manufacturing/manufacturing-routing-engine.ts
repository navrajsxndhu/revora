import { prisma } from "@/lib/prisma";

export const ManufacturingRoutingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
