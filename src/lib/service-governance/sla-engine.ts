import { prisma } from "@/lib/prisma";

export const SlaEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
