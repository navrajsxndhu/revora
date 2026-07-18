import { prisma } from "@/lib/prisma";

export const SustainabilityReportingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
