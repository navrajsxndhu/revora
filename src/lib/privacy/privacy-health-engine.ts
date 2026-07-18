import { prisma } from "@/lib/prisma";

export const PrivacyHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
