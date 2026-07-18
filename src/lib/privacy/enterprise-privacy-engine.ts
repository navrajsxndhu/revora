import { prisma } from "@/lib/prisma";

export const EnterprisePrivacyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
