import { prisma } from "@/lib/prisma";

export const ExpenditureEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
