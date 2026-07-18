import { prisma } from "@/lib/prisma";

export const RenewalEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
