import { prisma } from "@/lib/prisma";

export const AssetIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
