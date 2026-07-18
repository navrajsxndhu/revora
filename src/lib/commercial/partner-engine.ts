import { prisma } from "@/lib/prisma";

export const PartnerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
