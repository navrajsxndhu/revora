import { prisma } from "@/lib/prisma";

export const EnergyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
