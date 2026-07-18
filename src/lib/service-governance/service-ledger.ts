import { prisma } from "@/lib/prisma";

export const ServiceLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
