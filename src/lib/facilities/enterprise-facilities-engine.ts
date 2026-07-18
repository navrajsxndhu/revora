import { prisma } from "@/lib/prisma";

export const EnterpriseFacilitiesEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
