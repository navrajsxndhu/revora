import { prisma } from "@/lib/prisma";

export const ReservationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
