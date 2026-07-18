import { prisma } from "@/lib/prisma";

export const ConfigurationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
