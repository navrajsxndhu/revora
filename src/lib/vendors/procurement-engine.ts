import { prisma } from "@/lib/prisma";

export const ProcurementEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
