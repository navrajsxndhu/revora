import { prisma } from "@/lib/prisma";

export const ArchitectureLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
