import { prisma } from "@/lib/prisma";

export const FrameworkEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
