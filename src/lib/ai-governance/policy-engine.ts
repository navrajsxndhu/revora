import { prisma } from "@/lib/prisma";

export const PolicyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
