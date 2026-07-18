import { prisma } from "@/lib/prisma";

export const CalendarEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
