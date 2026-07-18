import { prisma } from "@/lib/prisma";

export const RegulationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
