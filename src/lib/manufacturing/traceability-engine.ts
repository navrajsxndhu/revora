import { prisma } from "@/lib/prisma";

export const TraceabilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
