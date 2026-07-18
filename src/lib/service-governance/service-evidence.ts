import { prisma } from "@/lib/prisma";

export const ServiceEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
