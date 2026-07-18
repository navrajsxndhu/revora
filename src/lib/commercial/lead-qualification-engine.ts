import { prisma } from "@/lib/prisma";

export const LeadQualificationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
