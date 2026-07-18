import { prisma } from "@/lib/prisma";

export const ReplenishmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
