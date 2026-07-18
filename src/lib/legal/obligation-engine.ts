import { prisma } from "@/lib/prisma";

export const ObligationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
