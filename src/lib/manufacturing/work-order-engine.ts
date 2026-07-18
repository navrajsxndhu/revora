import { prisma } from "@/lib/prisma";

export const WorkOrderEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
