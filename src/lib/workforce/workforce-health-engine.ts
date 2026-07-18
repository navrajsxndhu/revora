import { prisma } from "@/lib/prisma";

export const WorkforceHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
