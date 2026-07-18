import { prisma } from "@/lib/prisma";

export const ManufacturingIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
