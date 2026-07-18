import { prisma } from "@/lib/prisma";

export const ZeroTrustEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
