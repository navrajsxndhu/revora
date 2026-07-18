import { prisma } from "@/lib/prisma";

export const QualityIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
