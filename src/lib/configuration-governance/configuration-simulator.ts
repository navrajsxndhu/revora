import { prisma } from "@/lib/prisma";

export const ConfigurationSimulator = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
