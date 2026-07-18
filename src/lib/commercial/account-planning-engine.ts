import { prisma } from "@/lib/prisma";

export const AccountPlanningEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
