import { prisma } from "@/lib/prisma";

export const SemanticModelEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
