import { prisma } from "@/lib/prisma";

export const CampaignEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
