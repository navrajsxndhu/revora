import { prisma } from "@/lib/prisma";

export const PreventiveActionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
