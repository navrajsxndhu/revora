import { prisma } from "@/lib/prisma";

export const DpiaEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
