import { prisma } from "@/lib/prisma";

export const EnvironmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
