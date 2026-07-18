import { prisma } from "@/lib/prisma";

export const MetadataComplianceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
