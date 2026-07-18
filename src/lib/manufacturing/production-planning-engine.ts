import { prisma } from "@/lib/prisma";

export const ProductionPlanningEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
