import { prisma } from "@/lib/prisma";

export const EngineeringChangeEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
