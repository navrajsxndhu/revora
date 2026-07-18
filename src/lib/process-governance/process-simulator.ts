import { prisma } from "@/lib/prisma";

export const ProcessSimulator = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
