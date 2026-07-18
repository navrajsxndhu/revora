import { prisma } from "@/lib/prisma";

export const KriEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
