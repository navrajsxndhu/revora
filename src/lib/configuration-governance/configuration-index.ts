import { prisma } from "@/lib/prisma";

export const ConfigurationIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
