import { prisma } from "@/lib/prisma";

export const CommercialValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
