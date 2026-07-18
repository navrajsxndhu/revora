import { prisma } from "@/lib/prisma";

export const PublicationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
