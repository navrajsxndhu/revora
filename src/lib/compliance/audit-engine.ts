import { prisma } from "@/lib/prisma";

export const AuditEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
