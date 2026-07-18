import { prisma } from "@/lib/prisma";

export const RootCauseEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
