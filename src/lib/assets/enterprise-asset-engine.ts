import { prisma } from "@/lib/prisma";

export const EnterpriseAssetEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
