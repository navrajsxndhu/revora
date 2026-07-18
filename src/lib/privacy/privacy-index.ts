import { prisma } from "@/lib/prisma";

export const PrivacyIndex = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
