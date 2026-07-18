import { prisma } from "@/lib/prisma";

export const ProcessorEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
