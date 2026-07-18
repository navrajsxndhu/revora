import { prisma } from "@/lib/prisma";

export const ProcurementHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
