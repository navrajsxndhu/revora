import { prisma } from "@/lib/prisma";

export const FacilityLedger = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
