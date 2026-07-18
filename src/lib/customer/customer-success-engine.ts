import { prisma } from "@/lib/prisma";

export const CustomerSuccessEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
