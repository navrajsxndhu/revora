import { prisma } from "@/lib/prisma";

export const MaterialConsumptionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
