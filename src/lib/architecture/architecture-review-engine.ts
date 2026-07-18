import { prisma } from "@/lib/prisma";

export const ArchitectureReviewEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
