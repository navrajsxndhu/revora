import { prisma } from "@/lib/prisma";

export const CryptographyEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
