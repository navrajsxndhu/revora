import { prisma } from "@/lib/prisma";

export const CompetencyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
