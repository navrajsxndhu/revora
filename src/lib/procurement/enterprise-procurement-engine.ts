import { prisma } from "@/lib/prisma";

export const EnterpriseProcurementEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
