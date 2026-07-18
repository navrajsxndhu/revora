import { prisma } from "@/lib/prisma";

export const RelationshipEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
