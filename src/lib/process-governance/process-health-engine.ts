import { prisma } from "@/lib/prisma";

export const ProcessHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
