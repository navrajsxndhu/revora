import { prisma } from "@/lib/prisma";

export const ComplianceHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
