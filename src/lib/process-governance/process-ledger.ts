import { prisma } from "@/lib/prisma";

export const ProcessLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
