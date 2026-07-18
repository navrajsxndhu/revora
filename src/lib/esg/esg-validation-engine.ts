import { prisma } from "@/lib/prisma";

export const EsgValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
