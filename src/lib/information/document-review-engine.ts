import { prisma } from "@/lib/prisma";

export const DocumentReviewEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
