import { prisma } from "@/lib/prisma";

export const MaintenanceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
