import { prisma } from "@/lib/prisma";

export const ConnectorEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
