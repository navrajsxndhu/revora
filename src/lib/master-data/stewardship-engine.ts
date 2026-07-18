import { prisma } from "@/lib/prisma";

export const StewardshipEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
