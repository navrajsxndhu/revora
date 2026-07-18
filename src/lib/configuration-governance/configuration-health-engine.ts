import { prisma } from "@/lib/prisma";

export const ConfigurationHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
