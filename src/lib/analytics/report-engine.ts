import { prisma } from "@/lib/prisma";

export const ReportEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
