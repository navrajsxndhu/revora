import { prisma } from "@/lib/prisma";

export const ProcurementEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
