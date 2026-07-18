import { prisma } from "@/lib/prisma";

export const ReportingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
