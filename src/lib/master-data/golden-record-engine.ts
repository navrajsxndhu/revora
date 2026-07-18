import { prisma } from "@/lib/prisma";

export const GoldenRecordEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
