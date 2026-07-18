import { prisma } from "@/lib/prisma";

export const MitigationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
