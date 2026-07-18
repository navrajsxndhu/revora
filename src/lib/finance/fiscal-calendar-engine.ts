import { prisma } from "@/lib/prisma";

export const FiscalCalendarEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
