import { prisma } from "@/lib/prisma";

export const SpendingPolicyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
