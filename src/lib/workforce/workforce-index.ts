import { prisma } from "@/lib/prisma";

export const WorkforceIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
