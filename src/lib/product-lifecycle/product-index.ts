import { prisma } from "@/lib/prisma";

export const ProductIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
