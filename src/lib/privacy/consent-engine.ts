import { prisma } from "@/lib/prisma";

export const ConsentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
