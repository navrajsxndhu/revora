import { prisma } from "@/lib/prisma";

export const ReferenceArchitectureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
