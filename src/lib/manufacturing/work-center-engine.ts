import { prisma } from "@/lib/prisma";

export const WorkCenterEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
