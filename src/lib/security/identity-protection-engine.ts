import { prisma } from "@/lib/prisma";

export const IdentityProtectionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
