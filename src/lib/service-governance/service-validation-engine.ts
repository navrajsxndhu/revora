import { prisma } from "@/lib/prisma";

export const ServiceValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
