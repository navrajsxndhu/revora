import { prisma } from "@/lib/prisma";

export const WasteEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
