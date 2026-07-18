import { prisma } from "@/lib/prisma";

export const CommercialIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
