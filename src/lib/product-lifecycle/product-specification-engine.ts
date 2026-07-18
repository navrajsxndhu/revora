import { prisma } from "@/lib/prisma";

export const ProductSpecificationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
