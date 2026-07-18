import { prisma } from "@/lib/prisma";

export const VendorAssessmentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
