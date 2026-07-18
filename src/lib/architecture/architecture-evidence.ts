import { prisma } from "@/lib/prisma";

export const ArchitectureEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
