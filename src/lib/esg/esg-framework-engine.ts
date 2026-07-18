import { prisma } from "@/lib/prisma";

export const EsgFrameworkEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
