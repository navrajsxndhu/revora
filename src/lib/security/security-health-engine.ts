import { prisma } from "@/lib/prisma";

export const SecurityHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
