import { prisma } from "@/lib/prisma";

export const AcquisitionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
