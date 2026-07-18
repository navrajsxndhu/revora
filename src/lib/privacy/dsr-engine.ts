import { prisma } from "@/lib/prisma";

export const DsrEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
