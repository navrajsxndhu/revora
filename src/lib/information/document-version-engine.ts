import { prisma } from "@/lib/prisma";

export const DocumentVersionEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
