import { prisma } from "@/lib/prisma";

export const BuildingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
