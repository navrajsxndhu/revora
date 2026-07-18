import { prisma } from "@/lib/prisma";

export const CustomerImpactEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
