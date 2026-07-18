import { prisma } from "@/lib/prisma";

export const ProjectHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
