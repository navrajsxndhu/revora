import { prisma } from "@/lib/prisma";

export const SupplierEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
