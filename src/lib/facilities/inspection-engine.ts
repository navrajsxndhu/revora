import { prisma } from "@/lib/prisma";

export const InspectionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
