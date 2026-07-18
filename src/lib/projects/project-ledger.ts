import { prisma } from "@/lib/prisma";

export const ProjectLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
