import { prisma } from "@/lib/prisma";

export const DiscountEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
