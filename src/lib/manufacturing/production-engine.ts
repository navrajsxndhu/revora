import { prisma } from "@/lib/prisma";

export const ProductionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
