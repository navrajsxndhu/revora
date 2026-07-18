import { prisma } from "@/lib/prisma";

export const OccupancyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
