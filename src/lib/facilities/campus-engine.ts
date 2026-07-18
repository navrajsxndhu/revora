import { prisma } from "@/lib/prisma";

export const CampusEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
