import { prisma } from "@/lib/prisma";

export const CollaborationAuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
