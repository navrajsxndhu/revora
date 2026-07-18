import { prisma } from "@/lib/prisma";

export const BomEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
