import { prisma } from "@/lib/prisma";

export const LegalLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
