import { prisma } from "@/lib/prisma";

export const DeliverableEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
