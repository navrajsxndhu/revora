import { prisma } from "@/lib/prisma";

export const UtilityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
