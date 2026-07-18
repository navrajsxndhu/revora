import { prisma } from "@/lib/prisma";

export const CommitmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
