import { prisma } from "@/lib/prisma";

export const PrivacyValidationEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
