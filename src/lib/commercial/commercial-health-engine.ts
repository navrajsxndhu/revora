import { prisma } from "@/lib/prisma";

export const CommercialHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
