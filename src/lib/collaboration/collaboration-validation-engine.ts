import { prisma } from "@/lib/prisma";

export const CollaborationValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
