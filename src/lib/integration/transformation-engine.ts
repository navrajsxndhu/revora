import { prisma } from "@/lib/prisma";

export const TransformationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
