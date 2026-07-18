import { prisma } from "@/lib/prisma";

export const RegulatoryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
