import { prisma } from "@/lib/prisma";

export const ProjectEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
