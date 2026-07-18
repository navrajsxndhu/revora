import { prisma } from "@/lib/prisma";

export const PricingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
