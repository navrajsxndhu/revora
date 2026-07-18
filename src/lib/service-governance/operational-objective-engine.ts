import { prisma } from "@/lib/prisma";

export const OperationalObjectiveEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
