import { prisma } from "@/lib/prisma";

export const TechnologyLifecycleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
