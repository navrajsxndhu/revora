import { prisma } from "@/lib/prisma";

export const AiLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
