import { prisma } from "@/lib/prisma";

export const WarrantyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
