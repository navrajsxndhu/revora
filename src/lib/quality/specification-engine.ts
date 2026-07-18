import { prisma } from "@/lib/prisma";

export const SpecificationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
