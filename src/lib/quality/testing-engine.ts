import { prisma } from "@/lib/prisma";

export const TestingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
