import { prisma } from "@/lib/prisma";

export const MeetingEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
