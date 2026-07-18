import { prisma } from "@/lib/prisma";

export const SecurityIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
