import { prisma } from "@/lib/prisma";

export const InnovationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
