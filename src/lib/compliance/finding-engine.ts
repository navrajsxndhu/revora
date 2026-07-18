import { prisma } from "@/lib/prisma";

export const FindingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
