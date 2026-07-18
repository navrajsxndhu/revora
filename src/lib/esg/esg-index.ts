import { prisma } from "@/lib/prisma";

export const EsgIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
