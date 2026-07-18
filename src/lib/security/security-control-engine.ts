import { prisma } from "@/lib/prisma";

export const SecurityControlEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
