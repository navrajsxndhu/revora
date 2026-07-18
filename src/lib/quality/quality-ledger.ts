import { prisma } from "@/lib/prisma";

export const QualityLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
