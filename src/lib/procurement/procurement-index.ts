import { prisma } from "@/lib/prisma";

export const ProcurementIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
