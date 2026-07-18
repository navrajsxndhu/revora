import { prisma } from "@/lib/prisma";

export const AiRegistryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
