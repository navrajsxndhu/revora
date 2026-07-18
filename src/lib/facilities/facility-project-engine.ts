import { prisma } from "@/lib/prisma";

export const FacilityProjectEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
