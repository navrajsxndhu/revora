import { prisma } from "@/lib/prisma";

export const ConfigurationLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
