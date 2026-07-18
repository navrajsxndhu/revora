import { prisma } from "@/lib/prisma";

export const RetentionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
