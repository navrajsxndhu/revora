import { prisma } from "@/lib/prisma";

export const DeploymentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
