import { prisma } from "@/lib/prisma";

export const SupplierQualityEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
