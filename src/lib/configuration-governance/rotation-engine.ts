import { prisma } from "@/lib/prisma";

export const RotationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
