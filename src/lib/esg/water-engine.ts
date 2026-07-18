import { prisma } from "@/lib/prisma";

export const WaterEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
