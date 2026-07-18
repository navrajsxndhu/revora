import { prisma } from "@/lib/prisma";

export const AiHealthEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
