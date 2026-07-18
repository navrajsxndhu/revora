import { prisma } from "@/lib/prisma";

export const MetadataAuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
