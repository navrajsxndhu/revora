import { prisma } from "@/lib/prisma";

export const ContinuityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
