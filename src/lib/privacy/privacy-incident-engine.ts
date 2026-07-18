import { prisma } from "@/lib/prisma";

export const PrivacyIncidentEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
