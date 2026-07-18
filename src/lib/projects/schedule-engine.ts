import { prisma } from "@/lib/prisma";

export const ScheduleEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
