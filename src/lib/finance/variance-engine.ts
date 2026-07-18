import { prisma } from "@/lib/prisma";

export const VarianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
