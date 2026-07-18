import { prisma } from "@/lib/prisma";

export const WorkPackageEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
