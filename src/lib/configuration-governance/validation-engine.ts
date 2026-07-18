import { prisma } from "@/lib/prisma";

export const ValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
