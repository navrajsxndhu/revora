import { prisma } from "@/lib/prisma";

export const PrivacyEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
