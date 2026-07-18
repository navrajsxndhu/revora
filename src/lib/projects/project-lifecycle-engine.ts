import { prisma } from "@/lib/prisma";

export const ProjectLifecycleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
