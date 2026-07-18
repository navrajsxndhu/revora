import { prisma } from "@/lib/prisma";

export const InspectionPlanEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
