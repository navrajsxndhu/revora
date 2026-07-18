import { prisma } from "@/lib/prisma";

export const GlossaryEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
