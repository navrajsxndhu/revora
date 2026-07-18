import { prisma } from "@/lib/prisma";

export const ControllerEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
