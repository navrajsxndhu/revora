import { prisma } from "@/lib/prisma";

export const FacilityHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
