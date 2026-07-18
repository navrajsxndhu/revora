import { prisma } from "@/lib/prisma";

export const WorkforceValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
