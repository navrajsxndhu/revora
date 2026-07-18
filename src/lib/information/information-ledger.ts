import { prisma } from "@/lib/prisma";

export const InformationLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
