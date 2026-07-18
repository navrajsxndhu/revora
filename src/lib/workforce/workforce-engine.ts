import { prisma } from "@/lib/prisma";

export const WorkforceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
