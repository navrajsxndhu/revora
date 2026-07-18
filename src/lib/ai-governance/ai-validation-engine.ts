import { prisma } from "@/lib/prisma";

export const AiValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
