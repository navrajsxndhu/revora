import { prisma } from "@/lib/prisma";

export const RequisitionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
