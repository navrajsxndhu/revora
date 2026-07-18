import { prisma } from "@/lib/prisma";

export const EventBusEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
