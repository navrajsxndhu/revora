import { prisma } from "@/lib/prisma";

export const QualityHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
