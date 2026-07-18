import { prisma } from "@/lib/prisma";

export const LegalHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
