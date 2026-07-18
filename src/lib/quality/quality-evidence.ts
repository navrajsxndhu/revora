import { prisma } from "@/lib/prisma";

export const QualityEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
