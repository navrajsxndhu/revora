import { prisma } from "@/lib/prisma";

export const FacilityServiceEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
