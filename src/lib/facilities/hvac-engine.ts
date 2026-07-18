import { prisma } from "@/lib/prisma";

export const HvacEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
