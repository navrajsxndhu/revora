import { prisma } from "@/lib/prisma";

export const ProcessIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
