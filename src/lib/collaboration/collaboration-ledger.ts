import { prisma } from "@/lib/prisma";

export const CollaborationLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
