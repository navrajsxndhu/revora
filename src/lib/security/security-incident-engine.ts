import { prisma } from "@/lib/prisma";

export const SecurityIncidentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
