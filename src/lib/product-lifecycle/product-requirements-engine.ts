import { prisma } from "@/lib/prisma";

export const ProductRequirementsEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
