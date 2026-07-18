import { prisma } from "@/lib/prisma";

export const ProjectIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
