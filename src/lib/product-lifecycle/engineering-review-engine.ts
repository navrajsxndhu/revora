import { prisma } from "@/lib/prisma";

export const EngineeringReviewEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
