import { prisma } from "@/lib/prisma";

export const CustomerValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
