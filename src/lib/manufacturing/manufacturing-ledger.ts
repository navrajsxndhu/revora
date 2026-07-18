import { prisma } from "@/lib/prisma";

export const ManufacturingLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
