import { prisma } from "@/lib/prisma";

export const LegalHoldEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
