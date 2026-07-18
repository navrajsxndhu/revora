import { prisma } from "@/lib/prisma";

export const PrivacyLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
