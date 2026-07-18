import { prisma } from "@/lib/prisma";

export const MetadataIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
