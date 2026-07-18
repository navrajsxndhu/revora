import { prisma } from "@/lib/prisma";

export const ProcurementLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
