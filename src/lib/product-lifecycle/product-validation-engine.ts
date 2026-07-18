import { prisma } from "@/lib/prisma";

export const ProductValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
