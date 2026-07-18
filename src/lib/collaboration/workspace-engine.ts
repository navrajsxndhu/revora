import { prisma } from "@/lib/prisma";

export const WorkspaceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
