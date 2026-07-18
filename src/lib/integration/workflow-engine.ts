import { prisma } from "@/lib/prisma";

export const WorkflowEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
