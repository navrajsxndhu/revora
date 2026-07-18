import { prisma } from "@/lib/prisma";

export const AssetHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
