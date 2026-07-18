import { prisma } from "@/lib/prisma";

export const ReferenceDataEngine = {
  getOverview: async (workspaceId: string) => {
    return { data: "mock", workspaceId };
  }
};
