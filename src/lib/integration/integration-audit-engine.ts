import { prisma } from "@/lib/prisma";

export const IntegrationAuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
