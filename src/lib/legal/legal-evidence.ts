import { prisma } from "@/lib/prisma";

export const LegalEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
