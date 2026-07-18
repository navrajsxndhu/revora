import { prisma } from "@/lib/prisma";

export const CommissioningEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
