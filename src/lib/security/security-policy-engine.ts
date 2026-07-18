import { prisma } from "@/lib/prisma";

export const SecurityPolicyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
