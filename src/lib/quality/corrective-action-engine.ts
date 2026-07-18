import { prisma } from "@/lib/prisma";

export const CorrectiveActionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
