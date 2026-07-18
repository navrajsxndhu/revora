import { prisma } from "@/lib/prisma";

export const ProcurementValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
