import { prisma } from "@/lib/prisma";

export const LegalIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
