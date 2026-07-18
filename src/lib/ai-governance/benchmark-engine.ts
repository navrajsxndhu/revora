import { prisma } from "@/lib/prisma";

export const BenchmarkEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
