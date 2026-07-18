import { prisma } from "@/lib/prisma";

export const ManufacturingValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
