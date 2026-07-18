import { prisma } from "@/lib/prisma";

export const ConfigurationEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
