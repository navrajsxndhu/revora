import { prisma } from "@/lib/prisma";

export const SecurityValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
