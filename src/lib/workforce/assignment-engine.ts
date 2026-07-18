import { prisma } from "@/lib/prisma";

export const AssignmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
