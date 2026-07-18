import { prisma } from "@/lib/prisma";

export const DowntimeEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
