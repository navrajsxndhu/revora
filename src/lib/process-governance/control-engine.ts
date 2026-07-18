import { prisma } from "@/lib/prisma";

export const ControlEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
