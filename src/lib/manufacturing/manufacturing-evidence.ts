import { prisma } from "@/lib/prisma";

export const ManufacturingEvidence = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
