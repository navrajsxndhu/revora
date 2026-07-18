import { prisma } from "@/lib/prisma";

export const CustomerAccountEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
