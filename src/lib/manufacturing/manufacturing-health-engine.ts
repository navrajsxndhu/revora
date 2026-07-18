import { prisma } from "@/lib/prisma";

export const ManufacturingHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
