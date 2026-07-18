import { prisma } from "@/lib/prisma";

export const EncryptionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
