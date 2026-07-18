import { prisma } from "@/lib/prisma";

export const ExecutionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
