import { prisma } from "@/lib/prisma";

export const LifecycleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
