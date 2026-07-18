import { prisma } from "@/lib/prisma";

export const FacilityIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
