import { prisma } from "@/lib/prisma";

export const EsgHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
