import { prisma } from "@/lib/prisma";

export const RecoveryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
