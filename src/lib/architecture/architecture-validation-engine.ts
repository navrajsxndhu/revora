import { prisma } from "@/lib/prisma";

export const ArchitectureValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
