import { prisma } from "@/lib/prisma";

export const NetworkSecurityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
