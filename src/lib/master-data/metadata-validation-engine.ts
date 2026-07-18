import { prisma } from "@/lib/prisma";

export const MetadataValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
