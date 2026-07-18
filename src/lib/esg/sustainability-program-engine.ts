import { prisma } from "@/lib/prisma";

export const SustainabilityProgramEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
