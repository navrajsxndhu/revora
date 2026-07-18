import { prisma } from "@/lib/prisma";

export const ThreatEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
