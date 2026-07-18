import { prisma } from "@/lib/prisma";

export const LegalValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
